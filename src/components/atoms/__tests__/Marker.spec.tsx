import React from 'react';
import Marker from '../Marker';
import Image from 'next/image';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Marker.tsx テスト', () => {
  it('props.color が black のとき、黒マーカーのイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<Marker color={'black'} />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/blackMarker.svg'
    );
  });

  it('props.color が white のとき、白マーカーのイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<Marker color={'white'} />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/whiteMarker.svg'
    );
  });

  it('props.color が green のとき、img タグが表示されない', () => {
    const wrapper: ShallowWrapper = shallow(<Marker color={'green'} />);
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
});
