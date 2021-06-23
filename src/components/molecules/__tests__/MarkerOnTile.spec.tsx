import React from 'react';
import MarkerOnTile from '../MarkerOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('MarkerOnTile.tsx テスト', () => {
  it('Marker の color props が black であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <MarkerOnTile color={'black'} />
    );
    expect(wrapper.find('Marker').props().color).toEqual('black');
  });

  it('Marker の color props が white であること', () => {
    const wrapper: ShallowWrapper = shallow(
      <MarkerOnTile color={'white'} />
    );
    expect(wrapper.find('Marker').props().color).toEqual('white');
  });
});
