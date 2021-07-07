import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemOnTile from 'components/molecules/ItemOnTile';

const useStyles = makeStyles({
  tile: {
    display: 'inline-flex',
    border: 'solid 1px',
  },
});

const ReversiBoard = (): JSX.Element => {
  // Material UI 設定
  const classes = useStyles();

  // 盤面作成
  const reversiBoard: JSX.Element[][] = new Array<JSX.Element[]>(8);
  for (let x = 0; x < reversiBoard.length; x += 1) {
    reversiBoard[x] = new Array<JSX.Element>(8);
  }

  // 盤面初期化(key 値は x*10+y とする)
  for (let x = 0; x < reversiBoard.length; x += 1) {
    for (let y = 0; y < reversiBoard.length; y += 1) {
      reversiBoard[x][y] = <ItemOnTile key={x * 10 + y} />;
    }
  }

  // ゲームスタート時の状態に盤面を準備
  reversiBoard[3][3] = <ItemOnTile itemName="blackPiece" key={33} />;
  reversiBoard[3][4] = <ItemOnTile itemName="whitePiece" key={34} />;
  reversiBoard[4][3] = <ItemOnTile itemName="whitePiece" key={43} />;
  reversiBoard[4][4] = <ItemOnTile itemName="blackPiece" key={44} />;

  return (
    <div className={classes.tile}>
      {reversiBoard.map((tiles, index) => (
        <div key={index.toString()}>{tiles}</div>
      ))}
    </div>
  );
};

export default ReversiBoard;
