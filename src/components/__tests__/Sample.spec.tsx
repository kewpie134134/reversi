// Sample.tsx のテストコード
import React from 'react';
import Sample, { square } from '../Sample';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Sample.tsx テスト', () => {
  beforeEach(() => {
    const sampleComponent: ShallowWrapper = shallow(<Sample />);
  });
  it('square 関数テスト', () => {
    const result = square(3);
    const expected = 9;
    expect(result).toStrictEqual(expected);
  });
});
