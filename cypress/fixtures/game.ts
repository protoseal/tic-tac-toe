import { PlayersNames } from "../fixtures/constants"

export const getOpponentName = (playerName: string): string => {
  return playerName === PlayersNames.Player1
    ? PlayersNames.Player2
    : PlayersNames.Player1
}

export const createWinnerClicksTable = (
  cellWidth: number,
  cellHeight: number,
) => {
  return [
    { x: cellWidth * 0.5, y: cellHeight * 0.5 }, // 1,1 - row,col
    { x: cellWidth * 0.5, y: cellHeight * 1.5 }, // 2,1
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 1,2
    { x: cellWidth * 1.5, y: cellHeight * 0.5 }, // 2,2
    { x: cellWidth * 2.5, y: cellHeight * 0.5 }, // 1,3
  ]
}
