import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header.tsx テスト', () => {
  it('Head の text が Reversi Game であること', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Head).find('title').text()).toEqual('Reversi Game');
  });

  it('div の text が Reversi Game であること', () => {
    const wrapper = shallow(<Header />);
    expect(
      wrapper.find('div').find(AppBar).find(Toolbar).find(Typography).text()
    ).toEqual('Reversi Game');
  });
});
