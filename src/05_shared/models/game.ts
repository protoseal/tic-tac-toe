import type { IBoard } from "./board"
import type { IBoardFactory } from "./boardFactory"
import type { ICellFactory } from "./cellFactory"
import type { Coordinates, PlayerSymbol } from "./global"
import type { ILeaderboardRepository } from "./leaderboardRepository"
import type { IPlayer } from "./player"
import type { IPlayerFactory } from "./playerFactory"

export interface IGame {
  readonly status: GameStatus
  readonly isDraw: boolean
  readonly activePlayer: IPlayer
  readonly winner: IPlayer | null
  readonly board: IBoard
  readonly leaderboard: ILeaderboardRepository
  start(): void
  reset(): void
  makeMove(cellCoordinates: Coordinates): void
  setPlayers(players: PlayersConfig): void
}

export interface GameProps {
  boardSize: number
  leaderboardRepository: ILeaderboardRepository
  playerFactory: IPlayerFactory
  boardFactory: IBoardFactory
  cellFactory: ICellFactory
}

export type PlayerMap = Map<string, IPlayer>
export type PlayersConfig = Record<string, PlayerSymbol>

export enum GameStatus {
  start = "start",
  stop = "stop",
}
