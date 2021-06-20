import React from 'react';
import ExpectedStone from '../ExpectedStone';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ExpectedStone.tsx テスト', () => {
  let sampleComponent: ShallowWrapper;
  beforeEach(() => {
    sampleComponent = shallow(<ExpectedStone />);
  });
});
