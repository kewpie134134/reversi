import React from 'react';
import Tile from 'components/atoms/Tile';
import PieceOnTile from 'components/molecules/PieceOnTile';

const ReversiBoard = (): JSX.Element => {
  // 盤面作成
  const reversiBoard: JSX.Element[][] = new Array<JSX.Element[]>(8);
  for (let x = 0; x < reversiBoard.length; x += 1) {
    reversiBoard[x] = new Array<JSX.Element>(8);
  }

  // 盤面初期化(key 値は x*10+y とする)
  for (let x = 0; x < reversiBoard.length; x += 1) {
    for (let y = 0; y < reversiBoard.length; y += 1) {
      reversiBoard[x][y] = <Tile key={x * 10 + y} />;
    }
  }

  // ゲームスタート時の状態に盤面を準備
  reversiBoard[3][3] = <PieceOnTile color="black" key={33} />;
  reversiBoard[3][4] = <PieceOnTile color="white" key={34} />;
  reversiBoard[4][3] = <PieceOnTile color="white" key={43} />;
  reversiBoard[4][4] = <PieceOnTile color="black" key={44} />;

  return (
    <>
      <div>{reversiBoard[0]}</div>
      <div>{reversiBoard[1]}</div>
      <div>{reversiBoard[2]}</div>
      <div>{reversiBoard[3]}</div>
      <div>{reversiBoard[4]}</div>
      <div>{reversiBoard[5]}</div>
      <div>{reversiBoard[6]}</div>
      <div>{reversiBoard[7]}</div>
    </>
  );
};

export default ReversiBoard;
