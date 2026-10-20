module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#121820', steel: '#e8ecf0', flame: '#2f8cff', ember: '#ff7a1a', brass: '#c8a24a' },
    fontFamily: { display: ['var(--f-display)', 'sans-serif'], body: ['var(--f-body)', 'sans-serif'] }
  } }, plugins: []
};
