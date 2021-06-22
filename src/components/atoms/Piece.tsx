import React from 'react';

interface PieceProps {
  color: string;
}

const Piece = (props: PieceProps) => {
  if (['black', 'white'].includes(props.color)) {
    return <img src={`/assets/images/${props.color}Piece.svg`}></img>;
  } else {
    return <></>;
  }
};

export default Piece;
