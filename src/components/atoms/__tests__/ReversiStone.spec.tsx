import React from 'react';
import ReversiStone from '../ReversiStone';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ReversiStone.tsx テスト', () => {
  it('props.color が black のとき、黒石のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<ReversiStone color={'black'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/blackStone.svg'
    );
  });

  it('props.color が white のとき、白石のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<ReversiStone color={'white'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/whiteStone.svg'
    );
  });

  it('props.color が green のとき、img タグが表示されない', () => {
    const wrapper: ShallowWrapper = shallow(<ReversiStone color={'green'} />);
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
});
