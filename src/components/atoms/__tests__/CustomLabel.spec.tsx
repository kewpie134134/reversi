import React from 'react';
import CustomLabel from '../CustomLabel';
import { shallow, ShallowWrapper } from 'enzyme';

describe('CustomLabel.tsx テスト', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<CustomLabel customLabel={'×2'} />);
  });

  it('propsで渡された文字列が表示されること', () => {
    expect(wrapper.find('label').text()).toEqual('×2');
  });
});
