const path = require('path');

module.exports = {
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@configs': path.resolve(__dirname, 'src/configs'),
            '@layoutStore': path.resolve(__dirname, 'src/layouts'),
            '@navigation': path.resolve(__dirname, 'src/navigation'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@views': path.resolve(__dirname, 'src/views'),
            // Add more aliases as needed
          },
        },
      ],
    ],
  },
};
