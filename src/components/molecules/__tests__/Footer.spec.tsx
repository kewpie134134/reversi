import React from 'react';
import Footer from '../Footer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Footer.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('Copyright が期待通りに表示されること', () => {
    const thisYear = new Date().getFullYear();
    expect(wrapper.find('footer').find(Typography).text()).toEqual(
      `Copyright © Reversi Game ${thisYear}`
    );
  });

  it('Footer のリンク先が index(/) であること', () => {
    expect(
      wrapper.find('footer').find(Typography).find(Link).props().href
    ).toEqual('/');
  });
});
