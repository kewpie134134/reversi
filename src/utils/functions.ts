/**
 * 数値型の連想配列を作成する
 * @param xLength x 方向に作成する長さ
 * @param yLength y 方向に作成する長さ
 * @returns 指定されたサイズの数値型連想配列
 */
export const makeNumberAssocArray = (
  xLength: number,
  yLength: number
): number[][] => {
  const associativeArray: number[][] = new Array<number[]>(xLength);
  for (let x = 0; x < associativeArray.length; x += 1) {
    associativeArray[x] = new Array<number>(yLength);
  }
  return associativeArray;
};

/**
 * JSX.Element 型の連想配列を作成する
 * @param xLength x 方向に作成する長さ
 * @param yLength y 方向に作成する長さ
 * @returns 指定されたサイズの JSX.Element 型連想配列
 */
export const makeJsxElementAssocArray = (
  xLength: number,
  yLength: number
): JSX.Element[][] => {
  const associativeArray: JSX.Element[][] = new Array<JSX.Element[]>(xLength);
  for (let x = 0; x < associativeArray.length; x += 1) {
    associativeArray[x] = new Array<JSX.Element>(yLength);
  }
  return associativeArray;
};

/**
 * 2桁の数字から 10 の位 (x 座標) を返す
 * @param keyNumber key 値（座標値から計算されたもの -> x*10 + y）
 * @returns key 値から計算された x 座標
 */
export const xBoardFromKeyNumber = (keyNumber: number): number =>
  Math.trunc(keyNumber / 10);

/**
 * // 2桁の数字から 1 の位 (y 座標) を返す
 * @param keyNumber key 値（座標値から計算されたもの -> x*10 + y）
 * @returns key 値から計算された y 座標
 */
export const yBoardFromKeyNumber = (keyNumber: number): number =>
  keyNumber % 10;

/**
 * 盤面を初期化する
 * @param reversiBoardLabels 盤面生成時の配列 (8x8 の連装配列など)
 * @returns 初期化された盤面ラベル連装配列
 */
export const initReversiBoard = (
  reversiBoardLabels: number[][]
): number[][] => {
  const initReversiBoardLabels: number[][] = new Array<number[]>(8);
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    initReversiBoardLabels[x] = new Array<number>(8);
  }
  // 盤面初期化
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    for (let y = 0; y < reversiBoardLabels[x].length; y += 1) {
      initReversiBoardLabels[x][y] = 0;
    }
  }

  // ゲームスタート時の状態に盤面を準備(0: tile, 1: blackPiece, -1: whitePiece)
  initReversiBoardLabels[3][3] = 1;
  initReversiBoardLabels[3][4] = -1;
  initReversiBoardLabels[4][3] = -1;
  initReversiBoardLabels[4][4] = 1;

  return initReversiBoardLabels;
};
