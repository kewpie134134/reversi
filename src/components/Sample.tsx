import React from 'react';

export const square = (num: number) => {
  return num * num;
};

const Sample = () => {
  return (
    <>
      <div>Sample</div>
      <div>{square(3)}</div>
    </>
  );
};

export default Sample;
