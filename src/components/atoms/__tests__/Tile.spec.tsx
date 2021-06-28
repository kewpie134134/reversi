import React from 'react';
import Image from 'next/image';
import { shallow } from 'enzyme';
import Tile from '../Tile';

describe('Tile.tsx テスト', () => {
  it('オセロタイルが表示される', () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find(Image).props().src).toEqual('/assets/images/tile.svg');
  });
});
