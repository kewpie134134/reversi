import { xBoardFromKeyNumber, yBoardFromKeyNumber } from 'utils/functions';

describe('functions.ts ユニットテスト', () => {
  it('2 桁の数字から 10 の位を取得できること', () => {
    expect(xBoardFromKeyNumber(38)).toEqual(3);
  });

  it('2 桁の数字から 1 の位を取得できること', () => {
    expect(yBoardFromKeyNumber(38)).toEqual(8);
  });
});
