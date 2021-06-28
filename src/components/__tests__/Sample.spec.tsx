// Sample.tsx のテストコード
import React from 'react';
import { shallow } from 'enzyme';
import Sample, { square } from '../Sample';

describe('Sample.tsx テスト', () => {
  let sampleComponent = shallow(<Sample />);
  beforeEach(() => {
    sampleComponent = shallow(<Sample />);
  });

  it('<Sample /> div タグテスト', () => {
    expect(sampleComponent.find('div').text()).toEqual('Sample');
  });

  it('square 関数テスト', () => {
    const result = square(3);
    const expected = 9;
    expect(result).toStrictEqual(expected);
  });
});
