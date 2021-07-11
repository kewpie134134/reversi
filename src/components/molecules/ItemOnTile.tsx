import React from 'react';
import { makeStyles } from '@material-ui/core';
import Piece from 'components/atoms/Piece';
import Marker from 'components/atoms/Marker';

interface ItemOnTileProps {
  itemName?: string;
  onClick: () => void;
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

const ItemOnTile = ({ itemName, onClick }: ItemOnTileProps): JSX.Element => {
  const classes = useStyles();

  if (itemName && ['blackPiece', 'whitePiece'].includes(itemName)) {
    return (
      <button type="button" className={classes.tile} onClick={onClick}>
        <Piece name={itemName} />
      </button>
    );
  }
  if (itemName && ['blackMarker', 'whiteMarker'].includes(itemName)) {
    return (
      <button type="button" className={classes.tile} onClick={onClick}>
        <Marker name={itemName} />
      </button>
    );
  }
  return (
    <button type="button" className={classes.tile} onClick={onClick}>
      {' '}
    </button>
  );
};

// props が渡されないかもしれないのでデフォルト値を設定する
ItemOnTile.defaultProps = {
  itemName: '',
};

export default ItemOnTile;
