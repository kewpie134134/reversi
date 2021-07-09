import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemOnTile from 'components/molecules/ItemOnTile';

const useStyles = makeStyles({
  tiles: {
    display: 'inline-flex',
    border: 'solid 1px',
  },
});

// TODO: ロジックと描画部分を分ける
const ReversiBoard = (): JSX.Element => {
  // Material UI 設定
  const classes = useStyles();

  const xBoardFromKeyNumber = (keyNumber: number) =>
    // 2桁の数字から 10 の位を取得する
    Math.trunc(keyNumber / 10);

  const yBoardFromKeyNumber = (keyNumber: number) =>
    // 2桁の数字から 1 の位を取得する
    keyNumber % 10;

  // クリック時に実行されるイベント
  const clickHandler = (keyNumber: number): void => {
    console.log(xBoardFromKeyNumber(keyNumber));
    console.log(yBoardFromKeyNumber(keyNumber));
  };

  // 盤面処理用配列（ラベルを使用, 0: Tile, 1: blackPiece, -1: whitePiece）
  const reversiBoardLabels: number[][] = new Array<number[]>(8);
  // 盤面描画用配列
  const reversiBoardViews: JSX.Element[][] = new Array<JSX.Element[]>(8);

  // 配列作成
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    reversiBoardLabels[x] = new Array<number>(8);
    reversiBoardViews[x] = new Array<JSX.Element>(8);
  }

  // 盤面初期化
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    for (let y = 0; y < reversiBoardLabels.length; y += 1) {
      reversiBoardLabels[x][y] = 0;
    }
  }

  // ゲームスタート時の状態に盤面を準備(0: tile, 1: blackPiece, -1: whitePiece)
  reversiBoardLabels[3][3] = 1;
  reversiBoardLabels[3][4] = -1;
  reversiBoardLabels[4][3] = -1;
  reversiBoardLabels[4][4] = 1;

  // 盤面をロジックに合わせて描画(key 値は x*10+y とする)
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    for (let y = 0; y < reversiBoardLabels.length; y += 1) {
      switch (reversiBoardLabels[x][y]) {
        case 1: // 黒石の場合
          reversiBoardViews[x][y] = (
            <ItemOnTile
              itemName="blackPiece"
              onClick={() => clickHandler(x * 10 + y)}
              key={x * 10 + y}
            />
          );
          break;
        case -1: // 白石の場合
          reversiBoardViews[x][y] = (
            <ItemOnTile
              itemName="whitePiece"
              onClick={() => clickHandler(x * 10 + y)}
              key={x * 10 + y}
            />
          );
          break;
        case 0: // 石がない場合
        default:
          reversiBoardViews[x][y] = (
            <ItemOnTile
              onClick={() => clickHandler(x * 10 + y)}
              key={x * 10 + y}
            />
          );
      }
    }
  }

  return (
    <div className={classes.tiles}>
      {reversiBoardViews.map((tiles, index) => (
        <div key={index.toString()}>{tiles}</div>
      ))}
    </div>
  );
};

export default ReversiBoard;
