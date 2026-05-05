---
name: Split Design System
colors:
  surface: '#11150a'
  surface-dim: '#11150a'
  surface-bright: '#373b2e'
  surface-container-lowest: '#0c0f06'
  surface-container-low: '#191d12'
  surface-container: '#1d2115'
  surface-container-high: '#272b1f'
  surface-container-highest: '#32362a'
  on-surface: '#e1e4d2'
  on-surface-variant: '#c2cab0'
  inverse-surface: '#e1e4d2'
  inverse-on-surface: '#2e3225'
  outline: '#8c947c'
  outline-variant: '#434935'
  surface-tint: '#9cd924'
  primary: '#fffff3'
  on-primary: '#233600'
  primary-container: '#b6f542'
  on-primary-container: '#4c6e00'
  inverse-primary: '#476800'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#fffdff'
  on-tertiary: '#312d47'
  tertiary-container: '#e4ddff'
  on-tertiary-container: '#65607d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b7f643'
  primary-fixed-dim: '#9cd924'
  on-primary-fixed: '#131f00'
  on-primary-fixed-variant: '#354e00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c9c2e3'
  on-tertiary-fixed: '#1c1831'
  on-tertiary-fixed-variant: '#47435f'
  background: '#11150a'
  on-background: '#e1e4d2'
  surface-variant: '#32362a'
  bg-base: '#0D0D0D'
  surface-card: '#1A1A1A'
  surface-elevated: '#242424'
  border-subtle: '#2E2E2E'
  primary-dark: '#8FBF2E'
  primary-text-on-accent: '#0D0D0D'
  status-success: '#B6F542'
  status-warning: '#F5A623'
  status-danger: '#FF4D4D'
  status-success-bg: '#1A2E0D'
  status-warning-bg: '#2E1F00'
  status-danger-bg: '#2E0D0D'
  text-primary: '#F5F5F5'
  text-secondary: '#8A8A8A'
  text-disabled: '#4A4A4A'
typography:
  hero-amount:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-amount:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  section-title:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  button-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
  caption-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
  badge-text:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  screen-edge: 20px
  card-inner: 16px
  stack-gap: 12px
  item-gap: 8px
  bottom-bar-height: 80px
  touch-target-min: 48px
---

# Split — Design System

## Brand
- **App name**: Split
- **Tagline**: Divide la cuenta, no la amistad
- **Market**: Chile — Latin America
- **Tone**: Friendly, fast, trustworthy. Social but not frivolous.

---

## Color Palette

### Base
- `--color-bg`: #0D0D0D (near black background)
- `--color-surface`: #1A1A1A (cards, modals, bottom sheets)
- `--color-surface-2`: #242424 (elevated surfaces, inputs)
- `--color-border`: #2E2E2E (subtle dividers)

### Accent
- `--color-primary`: #B6F542 (electric lime green — main CTA, highlights)
- `--color-primary-dark`: #8FBF2E (hover/pressed state)
- `--color-primary-text`: #0D0D0D (text on primary buttons)

### Semantic
- `--color-success`: #B6F542 (paid, confirmed, fully claimed)
- `--color-warning`: #F5A623 (partially claimed, pending)
- `--color-danger`: #FF4D4D (unclaimed, error, alert)
- `--color-text-primary`: #F5F5F5
- `--color-text-secondary`: #8A8A8A
- `--color-text-disabled`: #4A4A4A

---

## Typography

- **Font family**: Inter (primary), fallback: SF Pro, system-ui
- **Amounts / hero numbers**: 32–48px, weight 700, `--color-primary`
- **Section titles**: 20px, weight 600, `--color-text-primary`
- **Body / item names**: 16px, weight 400, `--color-text-primary`
- **Captions / labels**: 13px, weight 400, `--color-text-secondary`
- **Buttons**: 16px, weight 600

---

## Spacing & Layout

- **Base unit**: 8px
- **Screen padding**: 20px horizontal
- **Card padding**: 16px
- **Border radius — cards**: 16px
- **Border radius — buttons**: 12px
- **Border radius — chips/badges**: 999px (pill)
- **Bottom action bar height**: 80px (safe area aware)

---

## Components

### Primary Button
- Background: `--color-primary`
- Text: `--color-primary-text`
- Height: 56px
- Full width
- Border radius: 12px
- Font: 16px weight 600

### Secondary Button
- Background: transparent
- Border: 1px solid `--color-border`
- Text: `--color-text-primary`
- Same dimensions as primary

### Item Card
- Background: `--color-surface`
- Border radius: 16px
- Padding: 16px
- Shows: item name, quantity, unit price, total
- States: default / selected (left border accent `--color-primary`) / disabled

### Stepper (for multiple units)
- Minus button — count — plus button
- Count shown in bold 18px
- Buttons are circular, 32px diameter
- Background: `--color-surface-2`

### Status Badge
- ✅ Fully claimed: background `#1A2E0D`, text `--color-success`
- ⚠️ Partially claimed: background `#2E1F00`, text `--color-warning`
- 🔴 Unclaimed: background `#2E0D0D`, text `--color-danger`
- Font: 12px weight 600, pill shape

### Progress Bar
- Track: `--color-surface-2`
- Fill: `--color-primary`
- Height: 8px
- Border radius: 999px
- Always shows amount collected / total below

### Bottom Total Bar
- Fixed at bottom of item selection screen
- Background: `--color-surface` with top border `--color-border`
- Shows: "Tu total: $X.XXX" in large bold text
- Confirm button above safe area

### Transfer Confirmation Button
- Default state: outlined, text "Ya transferí ✓"
- Confirmed state: filled `--color-success`, text "¡Listo! Transferencia registrada"
- Transition: smooth fill animation on tap

---

## Iconography
- Style: rounded, filled — consistent with SF Symbols or Phosphor Icons
- Size: 24px standard, 20px in lists
- Color: `--color-text-secondary` default, `--color-primary` when active

---

## Motion & Microinteractions
- **Default transition**: 200ms ease-out
- **Bottom sheet**: slide up 300ms spring
- **Button press**: scale 0.97, 100ms
- **Transfer confirmation**: fill animation 400ms + subtle haptic feel
- **Progress bar**: animate on load and on update
- **Success screen**: subtle confetti or pulse on the checkmark

---

## Screen-specific Notes

### Upload Bill (Screen 1)
- Camera button should be the visual hero — large, centered, with a dashed border
- Digitized item list appears below as cards after scanning

### Item Selection (Screen 4)
- This is the most used screen — keep it fast and thumb-friendly
- Large tap targets (min 48px height per item)
- Shared item modal: bottom sheet, not a popup

### Live Dashboard (Screen 6)
- Most important data hierarchy: progress bar → unclaimed alerts → participant list
- Use color semantics consistently so the organizer can scan at a glance

### Confirmation Screen (Screen 8)
- Full screen moment of delight
- Large checkmark or success animation
- Amount paid shown bold and large
- Keep it simple — this is the reward for the user

---

## Language
- UI language: Spanish (Chile)
- Amounts format: $X.XXX (Chilean peso, dot as thousands separator)
- Example amounts: $5.000 / $24.000 / $87.500
