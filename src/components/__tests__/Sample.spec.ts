// Sample.tsx のテストコード
import { square } from '../Sample';

describe('Sample.tsx テスト', () => {
  it('square 関数テスト', () => {
    const result = square(3);
    const expected = 9;
    expect(result).toStrictEqual(expected);
  });
});
