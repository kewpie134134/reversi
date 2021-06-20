import React from 'react';
import ReversiTile from '../ReversiTile';
import { shallow, ShallowWrapper } from 'enzyme';

describe('ReversiTile.tsx テスト', () => {
  let sampleComponent: ShallowWrapper;
  beforeEach(() => {
    sampleComponent = shallow(<ReversiTile />);
  });
});
