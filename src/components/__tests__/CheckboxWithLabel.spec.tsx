import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('CheckboxWithLabel.tsx ユニットテスト', () => {
  it('CheckboxWithLabel がクリックされた後にラベルが変わること', () => {
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
  });
});
