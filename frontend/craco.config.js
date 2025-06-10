// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'), // CRACO will load this instead of the old plugin
        require('autoprefixer'),
      ],
    },
  },
};
