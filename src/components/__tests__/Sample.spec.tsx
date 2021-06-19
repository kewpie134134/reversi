// Sample.tsx のテストコード
import React from 'react';
import Sample, { square } from '../Sample';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Sample.tsx テスト', () => {
  let sampleComponent: ShallowWrapper;
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
