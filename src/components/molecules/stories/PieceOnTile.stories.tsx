import React from 'react';
import PieceOnTile from '../PieceOnTile';

const title = {
  title: 'PieceOnTile',
};

export const WhitePieceOnTile = (): JSX.Element => (
  <PieceOnTile color="white" />
);

export const BlackPieceOnTile = (): JSX.Element => (
  <PieceOnTile color="black" />
);

export default title;
