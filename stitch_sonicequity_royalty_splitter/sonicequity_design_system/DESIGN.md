---
name: SonicEquity Design System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb0cd'
  on-tertiary: '#640039'
  tertiary-container: '#f751a1'
  on-tertiary-container: '#570032'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies a "High-Fidelity Fintech" aesthetic—merging the precision of decentralized finance with the rhythmic energy of the music industry. It is designed to evoke a sense of "Automated Empowerment," where musicians feel both the security of an institutional platform and the creative spark of a modern studio.

The visual style utilizes **Dark-Mode Glassmorphism**. It relies on deep obsidian surfaces to provide a grounded, premium foundation, contrasted by vibrant, luminous accents that mimic digital audio signals. Transparency is a core visual metaphor for "On-Chain Precision," using blurred backgrounds and layered glass to visualize the flow of equity and royalties.

## Colors
The palette is centered on the **Obsidian Night** (`#0F172A`), providing a high-contrast backdrop for financial data. 

- **Primary (Electric Violet):** Represents "Equity" and the transformative power of the platform. Used for main actions and branding.
- **Secondary (Cyan Pulse):** Represents "Sonic" and the digital tech stack. Used for secondary call-to-actions and data visualizations.
- **Tertiary (Magenta Flare):** Used sparingly for highlighting high-performance assets or creative milestones.
- **Surface Strategy:** Use semi-transparent variants of the neutral color (e.g., `rgba(15, 23, 42, 0.6)`) to create glass layers over vibrant background gradients.

## Typography
The typography system balances approachable geometry with technical precision. 

- **Headlines:** Plus Jakarta Sans provides a friendly yet modern "tech-forward" feel with its open apertures and geometric curves.
- **Body:** Inter is utilized for its exceptional legibility in data-heavy environments and financial tables.
- **Data & Labels:** Geist (monospaced) is used for wallet addresses, transaction hashes, and metadata labels to reinforce the "on-chain" technical nature of the platform.

## Layout & Spacing
The layout follows a **Fluid-Fixed Hybrid** model. Content is contained within a 1280px maximum width but responds fluidly to smaller viewports. 

- **Grid:** A 12-column system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** An 8px base unit drives the spacing system (4px, 8px, 16px, 24px, 32px, 48px, 64px) to ensure mathematical harmony, reflecting the structure of musical bars and time signatures.
- **Safe Zones:** High-density financial dashboards should utilize 16px internal padding for cards, while editorial/marketing sections should expand to 32px or 48px to allow the "Glass" effects to breathe.

## Elevation & Depth
Elevation is not conveyed through heavy black shadows, but through **Luminous Depth** and **Backdrop Blurs**.

- **Level 1 (Base):** The Obsidian background.
- **Level 2 (Cards):** Semi-transparent surfaces with a `20px` backdrop-blur and a `1px` subtle border (border-white at 10% opacity).
- **Level 3 (Popovers/Modals):** Increased transparency (lower opacity) but higher blur (`40px`). These elements should have a subtle outer glow using the Primary color at 5-10% opacity.
- **The "Pulse" Effect:** Interactive elements can utilize a subtle inner-glow gradient to simulate a backlit interface, suggesting the element is "active" or "live."

## Shapes
The shape language uses **Soft Geometric** corners. 

- **Base Radius:** 8px for standard components like input fields and buttons.
- **Container Radius:** 16px for cards and major UI sections.
- **Interactive Radius:** 24px (Large) for featured "Investment" or "Connect" buttons to make them feel more tactile and distinctive against the grid.
- **Visual Contrast:** All glass layers must be accompanied by a 1px solid or semi-transparent border to ensure "crispness" and visibility against the dark background.

## Components
- **Buttons:** Primary buttons use a linear gradient (Violet to Cyan) with white text. Secondary buttons are "Ghost" style with a 1px white-alpha border and a backdrop blur.
- **Glass Cards:** The primary container for data. They must include a subtle top-left to bottom-right highlight on the border to simulate a light source.
- **Data Visualizations:** Charts should use "Neon" line styles with a gradient fill below the line that fades into the background obsidian.
- **Chips/Status:** Use the Primary/Secondary colors with high transparency (15%) for the background and 100% opacity for the text. Use the Geist font for a "technical tag" look.
- **Input Fields:** Darker than the card background to create a "well" effect. On focus, the border should glow with the Secondary (Cyan) color.
- **Progress Bars:** Designed as "Level Meters"—segmented bars that illuminate as the value increases, mimicking audio mixer aesthetics.