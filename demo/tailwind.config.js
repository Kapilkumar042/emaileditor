/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

// module.exports = {
//   mode: "jit",
//   content: [
//     '../src/pages/**/*.{ts,tsx}',
//     './src/components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
      // fontFamily: {
      //   body: [
      //     'Nunito Sans',
      //     'ui-sans-serif',
      //     'system-ui',
      //     '-apple-system',
      //     'system-ui',
      //     'Segoe UI',
      //     'Roboto',
      //     'Helvetica Neue',
      //     'Arial',
      //     'Noto Sans',
      //     'sans-serif',
      //     'Apple Color Emoji',
      //     'Segoe UI Emoji',
      //     'Segoe UI Symbol',
      //     'Noto Color Emoji',
      //     // ...defaultTheme.fontFamily.sans
      //   ],
      //   sans: [
      //     'Nunito Sans',
      //     'ui-sans-serif',
      //     'system-ui',
      //     '-apple-system',
      //     'system-ui',
      //     'Segoe UI',
      //     'Roboto',
      //     'Helvetica Neue',
      //     'Arial',
      //     'Noto Sans',
      //     'sans-serif',
      //     'Apple Color Emoji',
      //     'Segoe UI Emoji',
      //     'Segoe UI Symbol',
      //     'Noto Color Emoji',
      //     // ...defaultTheme.fontFamily.sans
      //   ]
      // },
      // colors: {
      //   transparent: "transparent",
      //   current: "currentColor",
      //   indigo: colors.indigo,
      //   blue: colors.blue,
      //   red: colors.red,
      //   orange: colors.orange,
      //   yellow: colors.yellow,
      //   green: colors.green,
      //   teal: colors.teal,
      //   purple: colors.purple,
      //   pink: colors.pink,
      //   slate: colors.slate,
      //   gray: colors.gray,
      //   neutral: colors.neutral,
      //   stone: colors.stone,
      //   amber: colors.amber,
      //   lime: colors.lime,
      //   emerald: colors.emerald,
      //   cyan: colors.cyan,
      //   sky: colors.sky,
      //   violet: colors.violet,
      //   fuchsia: colors.fuchsia,
      //   rose: colors.rose,
      //   theme: {
      //     50: colors.violet[50],
      //     100: colors.violet[100],
      //     200: colors.sky[200],
      //     300: colors.sky[300],
      //     400: colors.sky[400],
      //     500: colors.sky[500],
      //     600: colors.sky[600],
      //     700: colors.sky[700],
      //     800: colors.sky[800],
      //     900: colors.sky[900],
      //   },
      //   accent: {
      //     50: colors.sky[50],
      //     100: colors.sky[100],
      //     200: colors.sky[200],
      //     300: colors.sky[300],
      //     400: colors.sky[400],
      //     500: colors.sky[500],
      //     600: colors.sky[600],
      //     700: colors.sky[700],
      //     800: colors.sky[800],
      //     900: colors.sky[900],
      //     DEFAULT: colors.slate[100],
      //     foreground: colors.slate[900],
      //   },
      //   border: colors.slate[200],
      //   input: colors.slate[200],
      //   ring: colors.sky[900],
      //   background: colors.white,
      //   foreground: colors.slate[950],
      //   primary: {
      //     DEFAULT: colors.sky[800],
      //     foreground: colors.white,
      //   },
      //   secondary: {
      //     DEFAULT: colors.sky[100],
      //     foreground: colors.slate[900],
      //   },
      //   destructive: {
      //     DEFAULT: colors.red[600],
      //     foreground: colors.white,
      //   },
      //   muted: {
      //     DEFAULT: colors.slate[100],
      //     foreground: colors.slate[950],
      //   },
      //   popover: {
      //     DEFAULT: colors.white,
      //     foreground: colors.slate[950],
      //   },
      //   card: {
      //     DEFAULT: colors.white,
      //     foreground: colors.slate[950],
      //   },
      // },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       maxWidth: "100%",
      //     },
      //   },
      //   dark: {
      //     css: {
      //       color: theme("colors.gray.400"),
      //       "h2, h3, h4, thead th": {
      //         color: theme("colors.gray.200"),
      //       },
      //       "h2 small, h3 small, h4 small": {
      //         color: theme("colors.gray.400"),
      //       },
      //       code: {
      //         color: theme("colors.gray.200"),
      //       },
      //       hr: {
      //         borderColor: theme("colors.gray.200"),
      //         opacity: "0.05",
      //       },
      //       pre: {
      //         boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.1)",
      //       },
      //       a: {
      //         color: theme("colors.white"),
      //         borderBottomColor: theme("colors.sky.400"),
      //       },
      //       strong: {
      //         color: theme("colors.gray.200"),
      //       },
      //       thead: {
      //         color: theme("colors.gray.300"),
      //         borderBottomColor: "rgb(148 163 184 / 0.2)",
      //       },
      //       "tbody tr": {
      //         borderBottomColor: "rgb(148 163 184 / 0.1)",
      //       },
      //     },
      //   },
      // }),
      // // ringWidth: ['hover', 'active'],
      // borderRadius: {
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 2px)`,
      //   sm: "calc(var(--radius) - 4px)",
      // },
      // // fontFamily: {
      // //   sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      // // },
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
//     },
//   },
//   plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("tailwindcss-animate")],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}