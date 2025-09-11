/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        text: 'var(--text)',
        border: 'var(--border)',
        foreground: 'var(--foreground)',
        secondary: 'var(--secondary)',
        textPrimary: 'var(--text-primary)',
        textGray : 'var(--text-gray)',
      },
      fontFamily: {
        'serif': 'var(--font-family-serif)',
        'sans': 'var(--font-family-sans)',
        'heading': 'var(--font-family-serif)',
        'body': 'var(--font-family-sans)',
      }
    },
  },
   darkMode: "class",
  plugins: [require('daisyui'),  ],
  daisyui: {

    themes:[
      {
        mytheme: { // Light theme
          "primary": "#2e046d", // Purple
          "secondary": "#e7ac3b", // Yellow
          "accent": "#6c703e", // Green
          "neutral": "#444444", // Gray
          "base-100": "#ffffff", // White
          "info": "#C8E1E7",
          "success": "#DEF29F",
          "warning": "#F7E589",
          "error": "#F2B6B5",
        },
        IIA: {
          "primary": "#3EB169", // Green
          "secondary": "#F3FAF6", // light green
          "accent": "#6c703e", // Green
          "neutral": "#444444", // Gray
          "base-100": "#ffffff", // White
          "info": "#C8E1E7",
          "success": "#DEF29F",
          "warning": "#F7E589",
          "error": "#F2B6B5",
        },

      },
    ],
    darkTheme:"mytheme",
  },
}
