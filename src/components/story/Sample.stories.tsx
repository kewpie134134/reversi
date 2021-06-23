import React from 'react';
import Sample, { Button, square } from '../Sample';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const title = {
  title: 'Sample',
  component: Button,
  decorators: [withKnobs],
};

export const showButton = () => (
  <Button onClick={action('clicked')} text="Button" />
);

export const showSample = () => <Sample />;

export const showSquare = () => square(3);

export const primary = () => (
  <Button text={text('text', 'button')} onClick={action('clicked')} />
);

export default title;
