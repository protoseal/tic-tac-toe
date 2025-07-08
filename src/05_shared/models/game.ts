import type { Coordinates } from "./global"

export interface IGame {
  makeMove(cellCoordinates: Coordinates): void
}

export enum GameStatus {
  play = "play",
  stop = "stop",
}
