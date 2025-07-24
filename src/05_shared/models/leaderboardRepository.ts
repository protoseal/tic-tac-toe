export interface ILeaderboardRepository {
  getPlayerRecordByName(name: string): number | undefined
  getLeaderboard(): Leaderboard
  getLeaderboardSortedArray(): LeaderboardArray
  incrementWinnerRecord(playerName: string): void
  registerNewPlayer(playerName: string): void
  clear(): void
}

export type Leaderboard = Map<string, number>
export type LeaderboardArray = [string, number][]
