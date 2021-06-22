import React from 'react';
import StoneOnTile from '../StoneOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('ReversiStone の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <StoneOnTile name={'blackStone'} />
    );
    expect(wrapper.find('ReversiStone').props().color).toEqual('black');
  });

  it('ReversiStone の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <StoneOnTile name={'whiteStone'} />
    );
    expect(wrapper.find('ReversiStone').props().color).toEqual('white');
  });

  it('ExpectedStone の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <StoneOnTile name={'blackMarker'} />
    );
    expect(wrapper.find('ExpectedStone').props().color).toEqual('black');
  });

  it('ExpectedStone の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <StoneOnTile name={'whiteMarker'} />
    );
    expect(wrapper.find('ExpectedStone').props().color).toEqual('white');
  });
});
