export interface ILeaderboardRepository {
  incrementWinnerRecord(playerName: string): void
  registerNewPlayer(playerName: string): void
  clear(): void
  getPlayerRecordByName(name: string): number | undefined
  getLeaderboard(): Leaderboard
  getLeaderboardSortedArray(): LeaderboardArray
}

export type Leaderboard = Map<string, number>
export type LeaderboardArray = [string, number][]
