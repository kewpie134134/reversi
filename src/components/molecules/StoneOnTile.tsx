import React from 'react';
import styles from 'styles/StoneOnTile.module.css';
import ReversiStone from 'components/atoms/ReversiStone';
import ExpectedStone from 'components/atoms/ExpectedStone';

interface StoneOnTileProps {
  name: string;
}

const StoneOnTile = (props: StoneOnTileProps) => {
  let component;
  switch (props.name) {
    case 'blackStone':
      component = <ReversiStone color={'black'} />;
      break;
    case 'whiteStone':
      component = <ReversiStone color={'white'} />;
      break;
    case 'blackMarker':
      component = <ExpectedStone color={'black'} />;
      break;
    case 'whiteMarker':
      component = <ExpectedStone color={'white'} />;
      break;
    default:
      component = null;
  }
  return <div className={styles.tile}>{component}</div>;
};

export default StoneOnTile;
