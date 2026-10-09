/**
 * One place for your personal details, so you never hunt through components.
 *
 * ⚠ Values marked TODO are PLACEHOLDERS copied from the Stitch design.
 *   Replace them with your real details before deploying.
 */
export const siteConfig = {
  name: 'Zaara Mariyam',
  description:
    'Portfolio of Zaara Mariyam, BCA (AI & ML) student building machine learning projects in Python.',
  // TODO: set to your real domain once deployed (e.g. https://zaaramariyam.dev)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  // TODO: the design used this example address; replace with your real one.
  // This is the address SHOWN to visitors. Notification emails go to the
  // CONTACT_EMAIL environment variable instead (server-only).
  publicEmail: 'zaaramariyam.tech@example.com',

  socials: {
    // TODO: Home/About pages used the generic https://github.com and
    // https://linkedin.com; the Contact page had these specific URLs.
    github: 'https://github.com/zaaramariyam',
    linkedin: 'https://linkedin.com/in/zaara-mariyam',
  },

  location: 'Karnataka, India',
} as const;
