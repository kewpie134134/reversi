import {
  makeNumberAssocArray,
  makeJsxElementAssocArray,
  xBoardFromKeyNumber,
  yBoardFromKeyNumber,
  initReversiBoard,
} from 'utils/functions';

describe('functions.ts ユニットテスト', () => {
  it('8x8 の数値型連想配列を新規作成できること', () => {
    expect(makeNumberAssocArray(8, 8)).toEqual([
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ]);
  });

  it('8x8 の JSX.Element 型連想配列を新規作成できること', () => {
    expect(makeJsxElementAssocArray(8, 8)).toEqual([
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ]);
  });

  it('2 桁の数字から 10 の位を取得できること', () => {
    expect(xBoardFromKeyNumber(38)).toEqual(3);
  });

  it('2 桁の数字から 1 の位を取得できること', () => {
    expect(yBoardFromKeyNumber(38)).toEqual(8);
  });

  it('盤面初期化処理が実行されること', () => {
    // 8x8 の連想配列作成
    const mockReversiBoradLabels: number[][] = new Array<number[]>(8);
    for (let x = 0; x < mockReversiBoradLabels.length; x += 1) {
      mockReversiBoradLabels[x] = new Array<number>(8);
    }
    expect(initReversiBoard(mockReversiBoradLabels)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, -1, 0, 0, 0],
      [0, 0, 0, -1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});
