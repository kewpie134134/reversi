export const xBoardFromKeyNumber = (keyNumber: number): number =>
  // 2桁の数字から 10 の位を取得する
  Math.trunc(keyNumber / 10);

export const yBoardFromKeyNumber = (keyNumber: number): number =>
  // 2桁の数字から 1 の位を取得する
  keyNumber % 10;
