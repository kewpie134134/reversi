import React from 'react';

interface MarkerProps {
  color: string;
}

const Marker = (props: MarkerProps) => {
  const {color} = props
  if (['black', 'white'].includes(color)) {
    return <img src={`/assets/images/${color}Marker.svg`}></img>;
  } else {
    return <></>;
  }
};
export default Marker;
