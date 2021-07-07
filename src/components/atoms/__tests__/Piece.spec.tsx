import React from 'react';
import Image from 'next/image';
import { shallow } from 'enzyme';
import Piece from '../Piece';

describe('Piece.tsx テスト', () => {
  it('props.color が black のとき、黒石のイメージを表示する', () => {
    const wrapper = shallow(<Piece name="blackPiece" />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/blackPiece.svg'
    );
  });

  it('props.color が white のとき、白石のイメージを表示する', () => {
    const wrapper = shallow(<Piece name="whitePiece" />);
    expect(wrapper.find(Image).props().src).toEqual(
      '/assets/images/whitePiece.svg'
    );
  });

  it('props.color が white, black 以外のとき、img タグが表示されない', () => {
    const wrapper = shallow(<Piece name="greenPiece" />);
    expect(wrapper.find(Image).exists()).toBeFalsy();
  });
});
