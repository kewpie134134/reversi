import React from 'react';

interface MarkerProps {
  color: string;
}

const Marker = (props: MarkerProps) => {
  if (['black', 'white'].includes(props.color)) {
    return <img src={`/assets/images/${props.color}Marker.svg`}></img>;
  } else {
    return <></>;
  }
};
export default Marker;
