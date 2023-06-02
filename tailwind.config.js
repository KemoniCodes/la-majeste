/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "ruby": "var(--ruby)",
        "emerald": "var(--emerald)",
        "sapphire": "var(--sapphire)",
        "primary": "var(--textprimary)",
        "secondary": "var(--textsecondary)",
        "background": "var(--background)"
      },
      fontFamily: {
        "EditorialNew": "var(--EditorialNew)",
        "EditorialLight": "var(--EditorialNewLight)"
      },
      transitionProperty: {
        "bgHover":" background-color color 10s ease",
        // "linkHover": "var(--powderiris) 0.2s ease",
        // "navLinkHover": "var(--darkcocoa) 0.2s ease",
        // "imageHover": "opacity 0.2s ease"
      }
    },
  },
  plugins: [],
}
