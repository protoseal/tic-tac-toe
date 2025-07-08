export interface IPlayerRepository {
  saveWinner(playerName: string): void
  clear(): void
}
