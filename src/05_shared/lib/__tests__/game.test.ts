import {
  type GameProps,
  GameStatus,
  type PlayersConfig,
} from "@05_shared/models/game"
import { PlayerSymbol } from "@05_shared/models/global"
import { localStorageMock } from "@05_shared/utils/localStorageMock"

import { BoardFactory } from "../BoardFactory"
import { CellFactory } from "../CellFactory"
import { Game } from "../Game"
import { LeaderboardRepository } from "../LeaderboardRepository"
import { PlayerFactory } from "../PlayerFactory"

global.localStorage = localStorageMock as any

const leaderboardKey = "leaderboard"

const leaderboardRepository = new LeaderboardRepository()

const gameProps: GameProps = {
  boardSize: 3,
  boardFactory: new BoardFactory(),
  cellFactory: new CellFactory(),
  playerFactory: new PlayerFactory(),
  leaderboardRepository,
}

const players: PlayersConfig = { Bob: PlayerSymbol.X, Alice: PlayerSymbol.O }

describe("Game", () => {
  let game: Game
  let firstPlayerName: string

  beforeEach(() => {
    game = new Game(gameProps)
    game.setPlayers(players)
    game.start()
    firstPlayerName = game.activePlayer.name
    leaderboardRepository.clear()
  })

  it("should create game and register players", () => {
    const leaderboard = localStorage.getItem(leaderboardKey)
    expect(leaderboard).not.toBeUndefined()
  })

  it("should col line winner", () => {
    game.makeMove({ row: 0, col: 0 })
    game.makeMove({ row: 0, col: 1 })
    game.makeMove({ row: 1, col: 0 })
    game.makeMove({ row: 1, col: 1 })
    game.makeMove({ row: 2, col: 0 })

    expect(game.status).toBe(GameStatus.stop)
    expect(game.winner?.name).toBe(firstPlayerName)
  })

  it("should row line winner", () => {
    game.makeMove({ row: 0, col: 0 })
    game.makeMove({ row: 1, col: 1 })
    game.makeMove({ row: 0, col: 1 })
    game.makeMove({ row: 2, col: 1 })
    game.makeMove({ row: 0, col: 2 })

    expect(game.status).toBe(GameStatus.stop)
    expect(game.winner?.name).toBe(firstPlayerName)
  })

  it("should main diag winner", () => {
    game.makeMove({ row: 0, col: 0 })
    game.makeMove({ row: 1, col: 0 })
    game.makeMove({ row: 1, col: 1 })
    game.makeMove({ row: 2, col: 1 })
    game.makeMove({ row: 2, col: 2 })

    expect(game.status).toBe(GameStatus.stop)
    expect(game.winner?.name).toBe(firstPlayerName)
  })

  it("should anti diag winner", () => {
    game.makeMove({ row: 0, col: 2 })
    game.makeMove({ row: 1, col: 0 })
    game.makeMove({ row: 1, col: 1 })
    game.makeMove({ row: 2, col: 1 })
    game.makeMove({ row: 2, col: 0 })

    expect(game.status).toBe(GameStatus.stop)
    expect(game.winner?.name).toBe(firstPlayerName)
  })

  it("should draw", () => {
    if (firstPlayerName === "Bob") {
      game.makeMove({ row: 0, col: 0 }) // X
      game.makeMove({ row: 1, col: 0 }) // O
      game.makeMove({ row: 0, col: 1 }) // X
      game.makeMove({ row: 1, col: 1 }) // O
      game.makeMove({ row: 2, col: 0 }) // X
      game.makeMove({ row: 2, col: 1 }) // O
      game.makeMove({ row: 1, col: 2 }) // X
      game.makeMove({ row: 0, col: 2 }) // O
      game.makeMove({ row: 2, col: 2 }) // X - last move
    } else if (firstPlayerName === "Alice") {
      game.makeMove({ row: 0, col: 0 }) // X
      game.makeMove({ row: 0, col: 1 }) // O
      game.makeMove({ row: 0, col: 2 }) // X
      game.makeMove({ row: 1, col: 0 }) // O
      game.makeMove({ row: 1, col: 2 }) // X
      game.makeMove({ row: 1, col: 1 }) // O
      game.makeMove({ row: 2, col: 0 }) // X
      game.makeMove({ row: 2, col: 2 }) // O
      game.makeMove({ row: 2, col: 1 }) // X - last move
    }

    expect(game.status).toBe(GameStatus.stop)
    expect(game.isDraw).toBe(true)
    expect(game.winner).toBeNull()
  })

  it("should reset game", () => {
    game.start()

    game.makeMove({ row: 0, col: 1 })
    game.makeMove({ row: 2, col: 2 })

    expect(game.status).toBe(GameStatus.start)

    game.reset()

    expect(game.status).toBe(GameStatus.stop)
  })
})
