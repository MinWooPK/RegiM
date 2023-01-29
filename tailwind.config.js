/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    colors: {
      'Primary/100': '#E0F2FE',
      'Primary/600': '#0876DD',
      'Secondary/100': '#CFFAFE',
      'Secondary/600': '#29D2D3',
      'Neutral/200': '#E5E7EB',
      'Neutral/400': '#9CA3AF',
      'Neutral/700': '#374151',
      'Neutral/900': '#111827',
      'White': '#FFF',
    },
    extend: {

      boxShadow: {
        'Box/Shadow/Logo': '4px 12px 24px rgba(28, 44, 64, 0.08);'
      }

    },
  },
  plugins: [],
}
