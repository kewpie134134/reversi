import React from 'react';
import Piece from '../Piece';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Piece.tsx テスト', () => {
  it('props.color が black のとき、黒石のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<Piece color={'black'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/blackPiece.svg'
    );
  });

  it('props.color が white のとき、白石のイメージを表示する', () => {
    const wrapper: ShallowWrapper = shallow(<Piece color={'white'} />);
    expect(wrapper.find('img').props().src).toEqual(
      '/assets/images/whitePiece.svg'
    );
  });

  it('props.color が green のとき、img タグが表示されない', () => {
    const wrapper: ShallowWrapper = shallow(<Piece color={'green'} />);
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
});
