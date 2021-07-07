import React from 'react';
import { shallow } from 'enzyme';
import ItemOnTile from '../ItemOnTile';

describe('ItemOnTile.tsx テスト', () => {
  it('Piece の itemName props が blackPiece であること', () => {
    const wrapper = shallow(<ItemOnTile itemName="blackPiece" />);
    expect(wrapper.find('Piece').props().name).toEqual('blackPiece');
  });

  it('Piece の itemName props が whitePiece であること', () => {
    const wrapper = shallow(<ItemOnTile itemName="whitePiece" />);
    expect(wrapper.find('Piece').props().name).toEqual('whitePiece');
  });

  it('Marker の itemName props が blackMarker であること', () => {
    const wrapper = shallow(<ItemOnTile itemName="blackMarker" />);
    expect(wrapper.find('Marker').props().name).toEqual('blackMarker');
  });

  it('Marker の itemName props が whiteMarker であること', () => {
    const wrapper = shallow(<ItemOnTile itemName="whiteMarker" />);
    expect(wrapper.find('Marker').props().name).toEqual('whiteMarker');
  });

  it('itemName props がない場合に Piece, Marker タグが表示されていないこと', () => {
    const wrapper = shallow(<ItemOnTile />);
    expect(wrapper.find('Piece').exists()).toBeFalsy();
    expect(wrapper.find('Marker').exists()).toBeFalsy();
  });
});
