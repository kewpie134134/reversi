import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer.tsx テスト', () => {
  it('Copyright が期待通りに表示されること', () => {
    const wrapper = shallow(<Footer />);
    const thisYear = new Date().getFullYear();
    expect(wrapper.find('footer').find(Typography).text()).toEqual(
      `Copyright © Reversi Game ${thisYear}`
    );
  });

  it('Footer のリンク先が index(/) であること', () => {
    const wrapper = shallow(<Footer />);
    expect(
      wrapper.find('footer').find(Typography).find(Link).props().href
    ).toEqual('/');
  });
});
