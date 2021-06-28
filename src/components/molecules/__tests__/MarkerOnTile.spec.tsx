import React from 'react';
import { shallow } from 'enzyme';
import MarkerOnTile from '../MarkerOnTile';

describe('MarkerOnTile.tsx テスト', () => {
  it('Marker の color props が black であること', () => {
    const wrapper = shallow(<MarkerOnTile color="black" />);
    expect(wrapper.find('Marker').props().color).toEqual('black');
  });

  it('Marker の color props が white であること', () => {
    const wrapper = shallow(<MarkerOnTile color="white" />);
    expect(wrapper.find('Marker').props().color).toEqual('white');
  });

  it('props が white, black 以外のとき、Marker タグが表示されないこと', () => {
    const wrapper = shallow(<MarkerOnTile color="green" />);
    expect(wrapper.find('Marker').exists()).toBeFalsy();
  });
});
