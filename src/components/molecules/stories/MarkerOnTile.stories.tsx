import React from 'react';
import MarkerOnTile from '../MarkerOnTile';

const title = {
  title: 'MarkerOnTile',
};

export const WhiteMarkerOnTile = (): JSX.Element => (
  <MarkerOnTile color="white" />
);

export const BlackMarkerOnTile = (): JSX.Element => (
  <MarkerOnTile color="black" />
);

export default title;
