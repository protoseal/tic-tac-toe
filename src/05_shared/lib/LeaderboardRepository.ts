import type {
  ILeaderboardRepository,
  Leaderboard,
  LeaderboardItem,
} from "05_shared/models/leaderboardRepository"

export class LeaderboardRepository implements ILeaderboardRepository {
  private _LEADERBOARD_STORE_KEY: string = "leaderboard"

  public incrementWinnerRecord(playerName: string): void {
    const leaderboard = this._getLeaderboardFromStore()
    const currentPlayer = this._getPlayer(leaderboard, playerName)
    const updatedPlayer = this._incrementPlayerRecord(currentPlayer)

    leaderboard.set(playerName, updatedPlayer)
    this._saveLeaderboard(leaderboard)
  }

  private _getLeaderboardFromStore(): Leaderboard {
    const raw = localStorage.getItem(this._LEADERBOARD_STORE_KEY)
    if (!raw) return new Map()
    return this._deserializeLeaderboard(raw)
  }

  private _deserializeLeaderboard(raw: string): Leaderboard {
    try {
      const parsed: Leaderboard = JSON.parse(raw)
      return new Map(parsed)
    } catch (e) {
      console.error("Failed to parse leaderboard: ", e)
      return new Map()
    }
  }

  private _getPlayer(leaderboard: Leaderboard, name: string): LeaderboardItem {
    const currentPlayer = leaderboard.get(name)
    return currentPlayer ?? this._createNewPlayer(name)
  }

  private _createNewPlayer(name: string): LeaderboardItem {
    return { name, record: 0 }
  }

  private _incrementPlayerRecord(player: LeaderboardItem): LeaderboardItem {
    return { ...player, record: player.record + 1 }
  }

  private _saveLeaderboard(leaderboard: Leaderboard): void {
    const serialized = JSON.stringify(Array.from(leaderboard.entries()))
    localStorage.setItem(this._LEADERBOARD_STORE_KEY, serialized)
  }

  public registerNewPlayer(name: string): void {
    const leaderboard = this._getLeaderboardFromStore()
    if (leaderboard.has(name)) return

    const newPlayer = this._createNewPlayer(name)
    leaderboard.set(name, newPlayer)
    this._saveLeaderboard(leaderboard)
  }

  public getPlayerByName(name: string): LeaderboardItem | undefined {
    const leaderboard = this._getLeaderboardFromStore()
    return leaderboard.get(name)
  }

  public clear(): void {
    localStorage.removeItem(this._LEADERBOARD_STORE_KEY)
  }
}
