import React from 'react';
import Header from '../Header';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Header.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('div の text が Reversi Game であること', () => {
    console.log(wrapper.html());
    expect(
      wrapper.find('div').find('header').find('div').find('h6').text
    ).toEqual('E');
  });
});
