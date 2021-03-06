module.exports = {
  reactStrictMode: true,
  build: {
    babel: {
      plugins: [
        [
          '@babel/plugin-proposal-private-methods',
          {
            loose: true,
          },
          '@babel/plugin-proposal-private-property-in-object',
          { loose: true },
        ],
      ],
    },
  },
};
