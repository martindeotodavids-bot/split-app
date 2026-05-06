export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Solo POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const key = process.env.ANTHROPIC_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: 'API key no configurada' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Body inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { image, mimeType } = body;
  if (!image || !mimeType) {
    return new Response(JSON.stringify({ error: 'Faltan campos: image, mimeType' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const prompt = `Eres un asistente que analiza boletas de restaurantes chilenos.
Analiza la imagen y extrae TODOS los ítems con sus precios.
Devuelve ÚNICAMENTE un JSON válido, sin texto adicional:
{"items":[{"name":"Nombre del ítem","price":5000,"units":1}]}
Reglas:
- price = precio unitario en pesos chilenos (número entero)
- units = cantidad de ese ítem en la boleta (número entero)
- NO incluyas el total de la boleta como ítem
- Omite ítems cuyo precio no puedas leer`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mimeType, data: image } },
            { type: 'text', text: prompt },
          ],
        }],
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'Error de API');
    }

    const data = await res.json();
    const text = data.content[0].text;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Respuesta inesperada de Claude');

    const parsed = JSON.parse(match[0]);
    if (!parsed.items?.length) throw new Error('No se detectaron ítems');

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
