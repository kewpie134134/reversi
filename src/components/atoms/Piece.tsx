import React from 'react';

interface PieceProps {
  color: string;
}

const Piece = (props: PieceProps) => {
  const {color} = props
  if (['black', 'white'].includes(color)) {
    return <img src={`/assets/images/${color}Piece.svg`}></img>;
  } else {
    return <></>;
  }
};

export default Piece;
