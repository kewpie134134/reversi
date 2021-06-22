import React from 'react';
import Tile from '../Tile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Tile.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Tile />);
  });

  it('オセロタイルが表示される', () => {
    expect(wrapper.find('img').props().src).toEqual('/assets/images/tile.svg');
  });
});
