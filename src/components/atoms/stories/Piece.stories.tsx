import React from 'react';
import Piece from '../Piece';

const title = {
  title: 'Piece',
};

export const WhitePiece = (): JSX.Element => <Piece name="whitePiece" />;

export const BlackPiece = (): JSX.Element => <Piece name="blackPiece" />;

export default title;
