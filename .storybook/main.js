const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(tsx|mdx)',
    '../src/pages/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];
    return baseConfig;
  },
};
