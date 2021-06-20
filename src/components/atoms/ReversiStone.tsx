import React from 'react';

interface ReversiStoneProps {
  color: string;
}

const ReversiStone = (props: ReversiStoneProps) => {
  if (['black', 'white'].includes(props.color)) {
    return <img src={`/assets/images/${props.color}Stone.svg`}></img>;
  } else {
    return <></>;
  }
};

export default ReversiStone;
