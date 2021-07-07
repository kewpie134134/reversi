import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemOnTile from 'components/molecules/ItemOnTile';

const useStyles = makeStyles({
  tiles: {
    display: 'inline-flex',
    border: 'solid 1px',
  },
});

const ReversiBoard = (): JSX.Element => {
  // Material UI 設定
  const classes = useStyles();

  // 盤面ロジック用配列
  const reversiBoardLogic: number[][] = new Array<number[]>(8);
  // 盤面描画用配列
  const reversiBoard: JSX.Element[][] = new Array<JSX.Element[]>(8);

  // 配列作成
  for (let x = 0; x < reversiBoardLogic.length; x += 1) {
    reversiBoardLogic[x] = new Array<number>(8);
    reversiBoard[x] = new Array<JSX.Element>(8);
  }

  // 盤面初期化(key 値は x*10+y とする)
  for (let x = 0; x < reversiBoardLogic.length; x += 1) {
    for (let y = 0; y < reversiBoardLogic.length; y += 1) {
      reversiBoardLogic[x][y] = 0;
    }
  }

  // ゲームスタート時の状態に盤面を準備(0: tile, 1: blackPiece, -1: whitePiece)
  reversiBoardLogic[3][3] = 1;
  reversiBoardLogic[3][4] = -1;
  reversiBoardLogic[4][3] = -1;
  reversiBoardLogic[4][4] = 1;

  // 盤面をロジックに合わせて描画
  for (let x = 0; x < reversiBoardLogic.length; x += 1) {
    for (let y = 0; y < reversiBoardLogic.length; y += 1) {
      switch (reversiBoardLogic[x][y]) {
        case 1:
          reversiBoard[x][y] = (
            <ItemOnTile itemName="blackPiece" key={x * 10 + y} />
          );
          break;
        case -1:
          reversiBoard[x][y] = (
            <ItemOnTile itemName="whitePiece" key={x * 10 + y} />
          );
          break;
        case 0:
        default:
          reversiBoard[x][y] = <ItemOnTile key={x * 10 + y} />;
      }
    }
  }

  return (
    <div className={classes.tiles}>
      {reversiBoard.map((tiles, index) => (
        <div key={index.toString()}>{tiles}</div>
      ))}
    </div>
  );
};

export default ReversiBoard;
