import React from 'react';
import ReversiTile from '../ReversiTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ReversiTile.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<ReversiTile />);
  });

  it('オセロタイルが表示される', () => {
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/reversiTile.svg'
    );
  });
});
