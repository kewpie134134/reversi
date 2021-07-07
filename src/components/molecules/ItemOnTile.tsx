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
  // タイルのクリックハンドラ
  const clickHandler = () => {};

  if (itemName) {
    if (['blackPiece', 'whitePiece'].includes(itemName)) {
      return (
        <button type="button" className={classes.tile} onClick={clickHandler}>
          <Piece name={itemName} />
        </button>
      );
    }
    if (itemName && ['blackMarker', 'whiteMarker'].includes(itemName)) {
      return (
        <button type="button" className={classes.tile} onClick={clickHandler}>
          <Marker name={itemName} />
        </button>
      );
    }
  }
  return (
    <button type="button" className={classes.tile} onClick={clickHandler}>
      {' '}
    </button>
  );
};

// props が渡されないかもしれないのでデフォルト値を設定する
ItemOnTile.defaultProps = {
  itemName: '',
};

export default ItemOnTile;
