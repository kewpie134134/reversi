import React from 'react';
import Image from 'next/image';
import { shallow } from 'enzyme';
import Marker from '../Marker';

describe('Marker.tsx テスト', () => {
  it('props.color が black のとき、黒マーカーのイメージを表示する', () => {
    const wrapper = shallow(<Marker color="black" />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/blackMarker.svg'
    );
  });

  it('props.color が white のとき、白マーカーのイメージを表示する', () => {
    const wrapper = shallow(<Marker color="white" />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/whiteMarker.svg'
    );
  });

  it('props.color が green のとき、img タグが表示されない', () => {
    const wrapper = shallow(<Marker color="green" />);
    expect(wrapper.find(Image).exists()).toBeFalsy();
  });
});
