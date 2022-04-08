module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'libre-franklin,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      serif: 'Sentinel, Georgia, serif',
    },
    extend: {},
  },
  /* eslint-disable-next-line global-require */
  plugins: [require('@tailwindcss/typography')],
};
