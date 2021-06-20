import React from 'react';
import StoneOnTile from '../StoneOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('黒石を表示する', () => {
    const wrapper = shallow(<StoneOnTile name={'blackStone'} />);
    expect(wrapper.find('div').text()).toEqual('a');
  });
});
