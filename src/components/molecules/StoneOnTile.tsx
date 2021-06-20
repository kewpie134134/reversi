import React from 'react';
import styles from '../../styles/StoneOnTile.module.css';
import ReversiStone from '../atoms/ReversiStone';
import ExpectedStone from '../atoms/ExpectedStone';

interface StoneOnTileProps {
  name: string;
}

const StoneOnTile = (props: StoneOnTileProps) => {
  let component;
  switch (props.name) {
    case 'blackStone':
      component = <ReversiStone color={'black'} />;
    case 'whiteStone':
      component = <ReversiStone color={'white'} />;
    case 'blackMarker':
      component = <ExpectedStone color={'black'} />;
    case 'whiteMarker':
      component = <ExpectedStone color={'white'} />;
    default:
      component = null;
  }
  return <div className={styles.tile}>{component}</div>;
};

export default StoneOnTile;
