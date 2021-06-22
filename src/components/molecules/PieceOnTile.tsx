import React from 'react';
import { makeStyles } from '@material-ui/core';
import Piece from 'components/atoms/Piece';
import Marker from 'components/atoms/Marker';

interface PieceOnTileProps {
  name: string;
}

const useStyles = makeStyles({
  tile: {
    height: '100px',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#69C491',
  },
});

const PieceOnTile = (props: PieceOnTileProps) => {
  const classes = useStyles();
  let component;
  switch (props.name) {
    case 'blackStone':
      component = <Piece color={'black'} />;
      break;
    case 'whiteStone':
      component = <Piece color={'white'} />;
      break;
    case 'blackMarker':
      component = <Marker color={'black'} />;
      break;
    case 'whiteMarker':
      component = <Marker color={'white'} />;
      break;
    default:
      component = null;
  }
  return <div className={classes.tile}>{component}</div>;
};

export default PieceOnTile;
