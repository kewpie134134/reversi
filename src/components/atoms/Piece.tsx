import React from 'react';
import Image from 'next/image';

interface PieceProps {
  name: string;
}

const Piece = ({ name }: PieceProps): JSX.Element => {
  if (['blackPiece', 'whitePiece'].includes(name)) {
    return (
      <Image
        src={`/assets/images/${name}.svg`}
        width={80}
        height={80}
        alt={name}
      />
    );
  }
  return <></>;
};

export default Piece;
