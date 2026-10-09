import type { Config } from 'tailwindcss';

/**
 * Tailwind theme copied from the Stitch export (identical on all 3 pages).
 * Only change: font families now point at next/font CSS variables
 * (see src/app/layout.tsx) instead of the Google Fonts <link> tags.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
          "surface-container-lowest": "#0c0e13",
          "surface-dim": "#111318",
          "tertiary": "#d2bbff",
          "surface": "#111318",
          "surface-container": "#1e1f25",
          "on-secondary-container": "#00374d",
          "on-secondary-fixed": "#001e2c",
          "on-primary-container": "#340080",
          "tertiary-fixed-dim": "#d2bbff",
          "surface-container-high": "#282a2f",
          "on-surface-variant": "#cbc3d7",
          "outline-variant": "#494454",
          "inverse-primary": "#6d3bd7",
          "tertiary-fixed": "#eaddff",
          "secondary-container": "#00a6e0",
          "error": "#ffb4ab",
          "on-error-container": "#ffdad6",
          "surface-variant": "#33353a",
          "secondary": "#7bd0ff",
          "surface-container-low": "#1a1b21",
          "on-error": "#690005",
          "on-primary-fixed": "#23005c",
          "on-primary-fixed-variant": "#5516be",
          "on-tertiary-fixed-variant": "#5a00c6",
          "primary-fixed-dim": "#d0bcff",
          "surface-tint": "#d0bcff",
          "tertiary-container": "#a476ff",
          "outline": "#958ea0",
          "secondary-fixed": "#c4e7ff",
          "primary-container": "#a078ff",
          "on-tertiary-container": "#36007d",
          "background": "#111318",
          "surface-container-highest": "#33353a",
          "primary-fixed": "#e9ddff",
          "on-primary": "#3c0091",
          "on-background": "#e2e2e9",
          "inverse-on-surface": "#2e3036",
          "on-tertiary": "#3f008e",
          "on-tertiary-fixed": "#25005a",
          "inverse-surface": "#e2e2e9",
          "secondary-fixed-dim": "#7bd0ff",
          "on-surface": "#e2e2e9",
          "primary": "#d0bcff",
          "on-secondary-fixed-variant": "#004c69",
          "on-secondary": "#00354a",
          "surface-bright": "#37393f",
          "error-container": "#93000a"
    },
      borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
    },
      spacing: {
          "space-md": "1rem",
          "gutter-mobile": "1rem",
          "space-lg": "1.5rem",
          "margin-mobile": "1.25rem",
          "gutter": "1.5rem",
          "space-sm": "0.5rem",
          "space-xl": "2.5rem",
          "space-2xl": "4rem",
          "margin": "3rem",
          "space-xs": "0.25rem"
    },
      fontFamily: {
          "label-sm": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "body-md": [
                "var(--font-inter)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "body-sm": [
                "var(--font-inter)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "label-md": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "headline-md": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "code-sm": [
                "var(--font-inter)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "headline-sm": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "headline-lg-mobile": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "display-hero-mobile": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "headline-lg": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "display-hero": [
                "var(--font-space-grotesk)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ],
          "body-lg": [
                "var(--font-inter)",
                "ui-sans-serif",
                "system-ui",
                "sans-serif"
          ]
    },
      fontSize: {
          "label-sm": [
                "11px",
                {
                      "lineHeight": "16px",
                      "letterSpacing": "0.06em",
                      "fontWeight": "600"
                }
          ],
          "body-md": [
                "15px",
                {
                      "lineHeight": "24px",
                      "letterSpacing": "0em",
                      "fontWeight": "400"
                }
          ],
          "body-sm": [
                "13px",
                {
                      "lineHeight": "20px",
                      "letterSpacing": "0em",
                      "fontWeight": "400"
                }
          ],
          "label-md": [
                "14px",
                {
                      "lineHeight": "20px",
                      "letterSpacing": "0.02em",
                      "fontWeight": "500"
                }
          ],
          "headline-md": [
                "28px",
                {
                      "lineHeight": "36px",
                      "letterSpacing": "-0.01em",
                      "fontWeight": "600"
                }
          ],
          "code-sm": [
                "13px",
                {
                      "lineHeight": "18px",
                      "letterSpacing": "0em",
                      "fontWeight": "500"
                }
          ],
          "headline-sm": [
                "20px",
                {
                      "lineHeight": "28px",
                      "letterSpacing": "0em",
                      "fontWeight": "600"
                }
          ],
          "headline-lg-mobile": [
                "28px",
                {
                      "lineHeight": "36px",
                      "letterSpacing": "-0.01em",
                      "fontWeight": "600"
                }
          ],
          "display-hero-mobile": [
                "36px",
                {
                      "lineHeight": "44px",
                      "letterSpacing": "-0.02em",
                      "fontWeight": "700"
                }
          ],
          "headline-lg": [
                "40px",
                {
                      "lineHeight": "48px",
                      "letterSpacing": "-0.02em",
                      "fontWeight": "600"
                }
          ],
          "display-hero": [
                "56px",
                {
                      "lineHeight": "64px",
                      "letterSpacing": "-0.03em",
                      "fontWeight": "700"
                }
          ],
          "body-lg": [
                "18px",
                {
                      "lineHeight": "28px",
                      "letterSpacing": "-0.01em",
                      "fontWeight": "400"
                }
          ]
    },
    },
  },
  plugins: [],
};

export default config;
