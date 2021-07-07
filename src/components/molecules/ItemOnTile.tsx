import React from 'react';
import { makeStyles } from '@material-ui/core';
import Piece from 'components/atoms/Piece';
import Marker from 'components/atoms/Marker';

interface ItemOnTileProps {
  itemName?: string;
}

const useStyles = makeStyles({
  tile: {
    height: '100px',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#69C491',
    border: 'solid 1px',
  },
});

const ItemOnTile = ({ itemName }: ItemOnTileProps): JSX.Element => {
  const classes = useStyles();
  if (itemName) {
    if (['blackPiece', 'whitePiece'].includes(itemName)) {
      return (
        <div className={classes.tile}>
          <Piece name={itemName} />
        </div>
      );
    }
    if (itemName && ['blackMarker', 'whiteMarker'].includes(itemName)) {
      return (
        <div className={classes.tile}>
          <Marker name={itemName} />
        </div>
      );
    }
  }
  return <div className={classes.tile} />;
};

ItemOnTile.defaultProps = {
  itemName: '',
};

export default ItemOnTile;
