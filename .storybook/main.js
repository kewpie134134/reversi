module.exports = {
  stories: [
    '../src/components/storybook/**/*.stories.@(tsx|mdx)',
    '../src/pages/storybook/**/*.stories.@(tsx|mdx)',
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
};
