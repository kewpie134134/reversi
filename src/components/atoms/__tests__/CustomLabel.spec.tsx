import React from 'react';
import CustomLabel from '../CustomLabel';
import { shallow, ShallowWrapper } from 'enzyme';

describe('CustomLabel.tsx テスト', () => {
  let sampleComponent: ShallowWrapper;
  beforeEach(() => {
    sampleComponent = shallow(<CustomLabel customLabel={'x2'} />);
  });

  it('表示テスト', () => {});
});
