import React from 'react';
import Image from 'next/image';

interface MarkerProps {
  name: string;
}

const Marker = ({ name }: MarkerProps): JSX.Element => {
  if (['blackMarker', 'whiteMarker'].includes(name)) {
    return (
      <Image
        src={`/assets/images/${name}.svg`}
        width={20}
        height={20}
        alt={name}
      />
    );
  }
  return <></>;
};
export default Marker;
