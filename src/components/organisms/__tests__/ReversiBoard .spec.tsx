import React from 'react';
import { shallow } from 'enzyme';
import ReversiBoard from '../ReversiBoard';

describe('ReversiBoard.tsx テスト', () => {
  it('ReversiBoard が存在すること', () => {
    const wrapper = shallow(<ReversiBoard />);
    expect(wrapper.exists()).toBeTruthy();
  });

  // TODO: テスト項目を追加する
});
