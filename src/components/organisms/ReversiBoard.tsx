import React from 'react';

const ReversiBoard = (): JSX.Element => {
  // 盤面作成
  const array: number[][] = new Array<number[]>(8);
  for (let x = 0; x < array.length; x += 1) {
    array[x] = new Array<number>(8);
  }

  // 盤面初期化
  for (let x = 0; x < array.length; x += 1) {
    for (let y = 0; y < array.length; y += 1) {
      array[x][y] = 0;
    }
  }

  console.log(array);

  return <>{array}</>;
};

export default ReversiBoard;
