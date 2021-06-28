import React from 'react';
import Piece from '../Piece';

const title = {
  title: 'Piece',
};

export const WhitePiece = (): JSX.Element => <Piece color="white" />;

export const BlackPiece = (): JSX.Element => <Piece color="black" />;

export default title;
