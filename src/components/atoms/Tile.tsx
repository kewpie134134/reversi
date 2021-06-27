import React from 'react';
import Image from 'next/image';

const Tile = () => {
  return (
    <Image
      src="/assets/images/tile.svg"
      width={100}
      height={100}
      alt="tile"></Image>
  );
};

export default Tile;
