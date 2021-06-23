import React from 'react';
import PieceOnTile from '../PieceOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('Piece の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile color={'black'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('black');
  });

  it('Piece の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile color={'white'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('white');
  });
});
