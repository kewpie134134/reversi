import React from 'react';
import ExpectedStone from '../ExpectedStone';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ExpectedStone.tsx テスト', () => {
  it('props.color が black のとき、黒石(小)のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<ExpectedStone color={'black'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/blackSmallStone.svg'
    );
  });

  it('props.color が white のとき、白石(小)のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<ExpectedStone color={'white'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/whiteSmallStone.svg'
    );
  });

  it('props.color が green のとき、img タグが表示されない', () => {
    const wrapper: ShallowWrapper = shallow(<ExpectedStone color={'green'} />);
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
});
