import type { IBoard } from "05_shared/models/board"
import {
  type GameProps,
  GameStatus,
  type IGame,
  type PlayerMap,
  type PlayersConfig,
} from "05_shared/models/game"
import { type Coordinates, PlayerSymbol } from "05_shared/models/global"
import type { ILeaderboardRepository } from "05_shared/models/leaderboardRepository"
import type { IPlayer } from "05_shared/models/player"
import type { IPlayerFactory } from "05_shared/models/playerFactory"

export class Game implements IGame {
  private _gameStatus: GameStatus = GameStatus.stop
  private _activePlayerSymbol: PlayerSymbol
  private _isDraw: boolean = false

  private _players: PlayerMap
  private _winner: IPlayer | null = null
  private _board: IBoard
  private _boardRepo: ILeaderboardRepository

  constructor(props: GameProps) {
    this._boardRepo = props.leaderboardRepository

    this._board = props.boardFactory.create({
      size: props.boardSize,
      cellFactory: props.cellFactory,
    })

    this._players = this._createPlayers(props.players, props.playerFactory)
    this._registerPlayersInLeaderboard()

    this._activePlayerSymbol = this._randomFirstMovePlayer()
  }

  get activePlayer(): IPlayer {
    return this._players.get(this._activePlayerSymbol) as IPlayer
  }

  get isDraw(): boolean {
    return this._isDraw
  }

  get winner(): IPlayer | null {
    return this._winner
  }

  get status(): GameStatus {
    return this._gameStatus
  }

  private _createPlayers(
    players: PlayersConfig,
    playerFactory: IPlayerFactory,
  ): PlayerMap {
    const array = Object.entries(players)
    const map = new Map()

    array.forEach(([name, symbol]) => {
      const player = playerFactory.create({ name, symbol })
      map.set(symbol, player)
    })

    return map
  }

  private _registerPlayersInLeaderboard(): void {
    this._players.forEach((player) => {
      this._boardRepo.registerNewPlayer(player.name)
    })
  }

  private _randomFirstMovePlayer(): PlayerSymbol {
    return Math.round(Math.random()) === 0 ? PlayerSymbol.X : PlayerSymbol.O
  }

  public start(): void {
    this._gameStatus = GameStatus.start
  }

  private _stop(): void {
    this._gameStatus = GameStatus.stop
  }

  public makeMove(cellCoordinates: Coordinates): void {
    if (this._gameStatus !== GameStatus.start) return

    this._board.setPlayerSymbolInCell(cellCoordinates, this._activePlayerSymbol)
    this._checkStatusForCloseGame()

    if (this._gameStatus === GameStatus.start) {
      this._toggleActivePlayerSymbol()
    }
  }

  private _checkStatusForCloseGame(): void {
    if (this._board.checkWinner()) return this._handleWin()
    if (this._board.isAllCellsSelected) return this._handleDraw()
  }

  private _handleWin(): void {
    const winner = this._players.get(this._activePlayerSymbol)
    if (!winner) return

    this._winner = winner
    this._boardRepo.incrementWinnerRecord(winner.name)
    this._stop()
  }

  private _handleDraw(): void {
    this._isDraw = true
    this._stop()
  }

  private _toggleActivePlayerSymbol(): void {
    this._activePlayerSymbol =
      this._activePlayerSymbol === PlayerSymbol.X
        ? PlayerSymbol.O
        : PlayerSymbol.X
  }

  public reset(): void {
    this._board.reset()
    this._isDraw = false
    this._winner = null
    this._activePlayerSymbol = this._randomFirstMovePlayer()
    this._gameStatus = GameStatus.stop
  }
}
