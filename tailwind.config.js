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
    },
  },
  plugins: [],
}
