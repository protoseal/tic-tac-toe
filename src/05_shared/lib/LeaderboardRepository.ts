import type {
  ILeaderboardRepository,
  Leaderboard,
  LeaderboardArray,
} from "@05_shared/models/leaderboardRepository"

export class LeaderboardRepository implements ILeaderboardRepository {
  private _LEADERBOARD_STORE_KEY: string = "leaderboard"
  private readonly _state: Leaderboard

  constructor() {
    this._state = this._getLeaderboardFromStore()
  }

  public incrementWinnerRecord(playerName: string): void {
    const currentPlayerRecord = this._getPlayerRecord(playerName)
    const updatedPlayerRecord = this._incrementPlayerRecord(currentPlayerRecord)

    this._state.set(playerName, updatedPlayerRecord)
    this._saveLeaderboard()
  }

  public getLeaderboard(): Leaderboard {
    return this._getLeaderboardFromStore()
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

  private _getPlayerRecord(name: string): number {
    const current = this._state.get(name)
    return current ?? 0
  }

  private _incrementPlayerRecord(record: number): number {
    return record + 1
  }

  private _saveLeaderboard(): void {
    const leaderboard = this._state
    const serialized = JSON.stringify(Array.from(leaderboard.entries()))
    localStorage.setItem(this._LEADERBOARD_STORE_KEY, serialized)
  }

  public registerNewPlayer(name: string): void {
    if (this._state.has(name)) return

    this._state.set(name, 0)
    this._saveLeaderboard()
  }

  public getPlayerRecordByName(name: string): number | undefined {
    return this._state.get(name)
  }

  public clear(): void {
    this._state.clear()
    localStorage.removeItem(this._LEADERBOARD_STORE_KEY)
  }

  public getLeaderboardSortedArray(): LeaderboardArray {
    const leaderboardArray = Array.from(this._state.entries())
    const leaderboardSortedArray = leaderboardArray.sort((a, b) => b[1] - a[1])
    return leaderboardSortedArray
  }
}
