import React from 'react';
import { makeStyles } from '@material-ui/core';
import Marker from 'components/atoms/Marker';

interface MarkerOnTileProps {
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

const MarkerOnTile = (props: MarkerOnTileProps) => {
  const classes = useStyles();
  const {color} = props
  if (['black', 'white'].includes(color)) {
    return <div className={classes.tile}><Marker color={color}/></div>;
  } else {
    return<></>
  }
};

export default MarkerOnTile;
