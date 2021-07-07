import React from 'react';
import Piece from 'components/atoms/Piece';
import Marker from 'components/atoms/Marker';

const title = {
  title: 'ItemOnTile',
};

export const BlackPieceOnTile = (): JSX.Element => <Piece name="blackPiece" />;

export const WhitePieceOnTile = (): JSX.Element => <Piece name="whitePiece" />;

export const BlackMarkerOnTile = (): JSX.Element => (
  <Marker name="blackMarker" />
);

export const WhiteMarkerOnTile = (): JSX.Element => (
  <Marker name="whiteMarker" />
);

export default title;
