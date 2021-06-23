import React from 'react';
import PieceOnTile from '../PieceOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('Piece の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile name={'blackStone'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('black');
  });

  it('Piece の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile name={'whiteStone'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('white');
  });

  it('Marker の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile name={'blackMarker'} />
    );
    expect(wrapper.find('Marker').props().color).toEqual('black');
  });

  it('Marker の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile name={'whiteMarker'} />
    );
    expect(wrapper.find('Marker').props().color).toEqual('white');
  });
});
