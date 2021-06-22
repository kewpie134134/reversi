import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const square = (num: number) => {
  return num * num;
};

export const Button = ({ onClick, text }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);

const Sample = () => {
  return (
    <>
      <div>Sample</div>
      <p>{square(3)}</p>
    </>
  );
};

export default Sample;
