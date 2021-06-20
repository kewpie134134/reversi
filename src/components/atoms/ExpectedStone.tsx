import React from 'react';

interface ExpectedStoneProps {
  color: string;
}

const ExpectedStone = (props: ExpectedStoneProps) => {
  if (['black', 'white'].includes(props.color)) {
    return <img src={`/assets/images/${props.color}SmallStone.svg`}></img>;
  } else {
    return <></>;
  }
  return <>ExpectedStone</>;
};
export default ExpectedStone;
