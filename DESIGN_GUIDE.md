# Color & Theme — Frontend

## CSS Variables Setup

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 0 84% 60%;
  --border: 214.3 31.8% 91.4%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

## Color Rules

1. **70-20-10**: Primary 70%, secondary 20%, accent 10%
2. **Commit to light OR dark** — no muddy mid-grays
3. **High contrast CTAs** — buttons must pop
4. **Semantic colors**: red=destructive, green=success, yellow=warning

## Backgrounds

**AVOID**: Solid white (#fff) or plain gray

**USE**:
- Subtle gradients: `bg-gradient-to-br from-slate-50 to-slate-100`
- Noise/grain texture overlay
- Glassmorphism with backdrop-blur

```css
/* Grain overlay */
.grain::before {
  content: '';
  position: fixed;
  inset: 0;
  background: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
}
```

## Dark Theme

Always define both themes. Use CSS variables so switching is automatic.
# Typography — Frontend

## Font Selection

**AVOID**: Inter, Roboto, Arial, Open Sans — overused, generic

**USE** distinctive fonts:

| Use Case | Recommendations |
|----------|-----------------|
| Display/Headlines | Clash Display, Cabinet Grotesk, Satoshi, Playfair Display |
| Body Text | Plus Jakarta Sans, Instrument Sans, General Sans |
| Monospace | JetBrains Mono, IBM Plex Mono, Fira Code |

## Size Scale

Use dramatic jumps, not timid increments:

```css
fontSize: {
  'base': '1rem',       /* 16px */
  '2xl': '1.5rem',      /* 24px */
  '4xl': '2.5rem',      /* 40px */
  '5xl': '3.5rem',      /* 56px — hero */
  '6xl': '4.5rem',      /* 72px — statement */
}
```

## Hierarchy Rules

1. **One hero size per page** — don't compete for attention
2. **Body text 16-18px minimum** — readability
3. **Line height 1.5-1.7 for body** — dense for headlines (1.1-1.2)
4. **Max width 65-75 characters** — optimal reading measure

## Pairing Strategy

- Contrast weights: thin display + bold body
- Contrast styles: serif headlines + geometric sans body
- Never use more than 2 font families
