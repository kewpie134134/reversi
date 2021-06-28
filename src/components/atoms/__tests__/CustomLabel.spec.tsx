import React from 'react';
import { shallow } from 'enzyme';
import CustomLabel from '../CustomLabel';

describe('CustomLabel.tsx テスト', () => {
  it('propsで渡された文字列が表示されること', () => {
    const wrapper = shallow(<CustomLabel customLabel="×2" />);
    expect(wrapper.find('label').text()).toEqual('×2');
  });
});
