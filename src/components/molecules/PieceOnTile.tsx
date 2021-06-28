import React from 'react';
import { makeStyles } from '@material-ui/core';
import Piece from 'components/atoms/Piece';

interface PieceOnTileProps {
  color: string;
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

const PieceOnTile = (props: PieceOnTileProps): JSX.Element => {
  const classes = useStyles();
  const { color } = props;
  if (['black', 'white'].includes(color)) {
    return (
      <div className={classes.tile}>
        <Piece color={color} />
      </div>
    );
  }
  return <></>;
};

export default PieceOnTile;
