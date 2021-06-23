import React from 'react';
import PieceOnTile from '../PieceOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('props が black のとき、Piece の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile color={'black'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('black');
  });

  it('props が white のとき、Piece の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile color={'white'} />
    );
    expect(wrapper.find('Piece').props().color).toEqual('white');
  });

    it('props が white, black 以外のとき、Piece タグが表示されないこと', () => {
    const wrapper: ShallowWrapper = shallow(
      <PieceOnTile color={'green'} />
    );
    expect(wrapper.find('Piece').exists()).toBeFalsy();
  });
});
