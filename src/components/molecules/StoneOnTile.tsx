import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReversiStone from 'components/atoms/ReversiStone';
import ExpectedStone from 'components/atoms/ExpectedStone';

interface StoneOnTileProps {
  name: string;
}

const useStyles = makeStyles({
  tile: {
    height: '100px',
    width: '100px',
    background: '#69C491',
  },
});

const StoneOnTile = (props: StoneOnTileProps) => {
  const classes = useStyles();
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
  return <div className={classes.tile}>{component}</div>;
};

export default StoneOnTile;
