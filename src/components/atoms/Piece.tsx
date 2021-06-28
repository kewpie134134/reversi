import React from 'react';
import Image from 'next/image';

interface PieceProps {
  color: string;
}

const Piece = (props: PieceProps): JSX.Element => {
  const { color } = props;
  if (['black', 'white'].includes(color)) {
    return (
      <Image
        src={`/assets/images/${color}Piece.svg`}
        width={80}
        height={80}
        alt={`${color}Piece`}
      />
    );
  }
  return <></>;
};

export default Piece;
