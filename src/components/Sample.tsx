import React from 'react';

export const square = (num: number) => {
  return num * num;
};

const Sample = () => {
  return (
    <>
      <div>Sample</div>
      <p>{square(3)}</p>
    </>
  );
};

export default Sample;
