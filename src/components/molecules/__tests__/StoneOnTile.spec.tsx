import React from 'react';
import StoneOnTile from '../StoneOnTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('StoneOnTile.tsx テスト', () => {
  it('黒石が表示される', () => {
    const wrapper: ShallowWrapper = shallow(
      <StoneOnTile name={'blackStone'} />
    );
    console.log(wrapper.html());
    expect(wrapper.find('div').text()).toEqual('<ReversiStone />');
  });
});
