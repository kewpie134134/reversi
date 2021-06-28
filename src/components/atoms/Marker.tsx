import React from 'react';
import Image from 'next/image';

interface MarkerProps {
  color: string;
}

const Marker = (props: MarkerProps): JSX.Element => {
  const { color } = props;
  if (['black', 'white'].includes(color)) {
    return (
      <Image
        src={`/assets/images/${color}Marker.svg`}
        width={20}
        height={20}
        alt={`${color}Marker`}
      />
    );
  }
  return <></>;
};
export default Marker;
