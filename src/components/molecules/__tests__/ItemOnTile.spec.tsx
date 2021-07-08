import React from 'react';
import { shallow } from 'enzyme';
import ItemOnTile from '../ItemOnTile';

// TODO: ボタン属性になったため、テストを追加する
describe('ItemOnTile.tsx テスト', () => {
  const testMock = jest.fn();
  it('Piece の itemName props が blackPiece であること', () => {
    const wrapper = shallow(
      <ItemOnTile itemName="blackPiece" onClick={testMock} />
    );
    expect(wrapper.find('Piece').props().name).toEqual('blackPiece');
  });

  it('Piece の itemName props が whitePiece であること', () => {
    const wrapper = shallow(
      <ItemOnTile itemName="whitePiece" onClick={testMock} />
    );
    expect(wrapper.find('Piece').props().name).toEqual('whitePiece');
  });

  it('Marker の itemName props が blackMarker であること', () => {
    const wrapper = shallow(
      <ItemOnTile itemName="blackMarker" onClick={testMock} />
    );
    expect(wrapper.find('Marker').props().name).toEqual('blackMarker');
  });

  it('Marker の itemName props が whiteMarker であること', () => {
    const wrapper = shallow(
      <ItemOnTile itemName="whiteMarker" onClick={testMock} />
    );
    expect(wrapper.find('Marker').props().name).toEqual('whiteMarker');
  });

  it('itemName props がない場合に Piece, Marker タグが表示されていないこと', () => {
    const wrapper = shallow(<ItemOnTile onClick={testMock} />);
    expect(wrapper.find('Piece').exists()).toBeFalsy();
    expect(wrapper.find('Marker').exists()).toBeFalsy();
  });
});
