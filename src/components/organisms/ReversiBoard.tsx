import React from 'react';
import { makeStyles } from '@material-ui/core';
import ItemOnTile from 'components/molecules/ItemOnTile';
import {
  makeNumberAssocArray,
  makeJsxElementAssocArray,
  xBoardFromKeyNumber,
  yBoardFromKeyNumber,
  initReversiBoard,
} from 'utils/functions';

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

  // 指し手 0: 初期値, 1: 黒, -1: 白
  let player = 0; // 0: 初期値, 1: 黒, -1: 白
  // 盤面処理用配列作成（ラベルを使用, 0: Tile, 1: blackPiece, -1: whitePiece）
  const reversiBoardLabels: number[][] = makeNumberAssocArray(8, 8);
  // 盤面描画用配列作成
  const reversiBoardViews: JSX.Element[][] = makeJsxElementAssocArray(8, 8);

  // 配列の初期化
  for (let x = 0; x < reversiBoardLabels.length; x += 1) {
    for (let y = 0; y < reversiBoardLabels.length; y += 1) {
      reversiBoardLabels[x][y] = initReversiBoard(reversiBoardLabels)[x][y];
    }
  }

  // プレイヤーを黒の番にする
  player = 1;

  /* ---------------------------------------------------------------------- */
  /**
   * 指定された方向にひっくり返す石があるか確認する
   * @param xBoard 選択された x 座標
   * @param yBoard 選択された y 座標
   * @param xDirection ひっくり返す方向 (x 座標)
   * @param yDirection ひっくり返す方向 (y 座標)
   * @returns 石をひっくり返した数を返す
   */
  const calculateLineReversedPiece = (
    xBoard: number,
    yBoard: number,
    xDirection: number,
    yDirection: number
  ): number => {
    // 現在の盤面をバックアップするための配列を用意
    const reversiBoardLabelsBackup: number[][] = makeNumberAssocArray(8, 8);

    // 盤面情報をバックアップ
    for (let x = 0; x < reversiBoardLabelsBackup.length; x += 1) {
      for (let y = 0; y < reversiBoardLabelsBackup[x].length; y += 1) {
        reversiBoardLabelsBackup[x][y] = reversiBoardLabels[x][y];
      }
    }

    // 確認する石の座標
    let xx = xBoard;
    let yy = yBoard;
    // プレイヤーの石であるかのフラグ
    let isPlayerPieceColor = false;
    // 相手の石を裏返した数
    let isReversedOpponentPiece = 0;

    // 選択した位置から指定した方向へ移動し続け、完了条件になるまで石を裏返す
    for (;;) {
      xx += xDirection;
      yy += yDirection;

      // 盤面の端に到達したら抜ける
      if (xx < 0 || xx > 7 || yy < 0 || yy > 7) {
        break;
      }
      // 移動先に石がなかったら抜ける
      if (reversiBoardLabels[xx][yy] === 0) {
        break;
      }
      // 移動先が自分の色の石であれば、そのことを把握して抜ける
      if (reversiBoardLabels[xx][yy] === player) {
        isPlayerPieceColor = true;
        break;
      }
      // 上記以外は相手の石のため、裏返して裏返した件数を加算してループを続行する
      reversiBoardLabels[xx][yy] *= -1;
      isReversedOpponentPiece += 1;
    }

    // 裏返したが、移動先に自分の石がなかった場合は元に戻す
    if (isReversedOpponentPiece > 0) {
      if (!isPlayerPieceColor) {
        // 自分の石がなかった場合
        for (let x = 0; x < reversiBoardLabels.length; x += 1) {
          for (let y = 0; y < reversiBoardLabels[x].length; y += 1) {
            reversiBoardLabels[x][y] = reversiBoardLabelsBackup[x][y];
            // 石を裏返していないことをフラグに設定
            isReversedOpponentPiece = 0;
          }
        }
      } else {
        // 裏返し処理が出来ていたら、選択した場所に自身の色の石を置く
        reversiBoardLabels[xBoard][yBoard] = player;
      }
    }

    // 最後に裏返しを行った数を返す
    return isReversedOpponentPiece;
  };

  /* ---------------------------------------------------------------------- */

  /**
   * 各方向にの石をひっくり返すことができるか確認する
   * @param xBoard 盤面のX座標
   * @param yBoard 盤面のY座標
   * @returns 各方向でひっくり返した石の数の合計値を返す
   */
  const calculateReversedPieceSum = (
    xBoard: number,
    yBoard: number
  ): number => {
    let reversedPieceSum = 0;
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, -1, 0); // 左
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, -1, 1); // 左下
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, 0, 1); // 下
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, 1, 1); // 右下
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, 1, 0); // 右
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, 1, -1); // 右上
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, 0, -1); // 上
    reversedPieceSum += calculateLineReversedPiece(xBoard, yBoard, -1, -1); // 左上
    return reversedPieceSum;
  };

  // クリック時に実行されるイベント
  const clickHandler = (keyNumber: number): void => {
    // 選択した場所に石を置けるか
    if (
      reversiBoardLabels[xBoardFromKeyNumber(keyNumber)][
        yBoardFromKeyNumber(keyNumber)
      ] === 0
    ) {
      const log = calculateReversedPieceSum(
        xBoardFromKeyNumber(keyNumber),
        yBoardFromKeyNumber(keyNumber)
      );
      console.log(log);
    }
  };

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
