import React from 'react';
import Header from '../Header';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Header.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Head の text が Reversi Game であること', () => {
    expect(wrapper.find(Head).find('title').text()).toEqual('Reversi Game');
  });

  it('div の text が Reversi Game であること', () => {
    expect(
      wrapper.find('div').find(AppBar).find(Toolbar).find(Typography).text()
    ).toEqual('Reversi Game');
  });
});
