import React from 'react';
import ReversiStone from '../ReversiStone';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ReversiStone.tsx テスト', () => {
  let sampleComponent: ShallowWrapper;
  beforeEach(() => {
    sampleComponent = shallow(<ReversiStone />);
  });
});
