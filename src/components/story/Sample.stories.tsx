import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Sample, { Button, square } from '../Sample';

const title = {
  title: 'Sample',
  component: Button,
  decorators: [withKnobs],
};

export const showButton = (): JSX.Element => (
  <Button onClick={action('clicked')} text="Button" />
);

export const showSample = (): JSX.Element => <Sample />;

export const showSquare = (): number => square(3);

export const primary = (): JSX.Element => (
  <Button text={text('text', 'button')} onClick={action('clicked')} />
);

export default title;
