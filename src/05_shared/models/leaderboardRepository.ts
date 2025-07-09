export interface ILeaderboardRepository {
  incrementWinnerRecord(playerName: string): void
  registerNewPlayer(playerName: string): void
  clear(): void
}

export interface LeaderboardItem {
  name: string
  record: number
}
export type Leaderboard = Map<string, LeaderboardItem>
