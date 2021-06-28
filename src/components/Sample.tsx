import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const square = (num: number): number => num * num;

export const Button = ({ onClick, text }: ButtonProps): JSX.Element => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const Sample = (): JSX.Element => (
  <>
    <div>Sample</div>
    <p>{square(3)}</p>
  </>
);

export default Sample;
