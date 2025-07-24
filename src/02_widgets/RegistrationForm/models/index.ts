import type { PlayerSymbol } from "@05_shared/models/global"

export interface FormData {
  firstPlayerName: string
  secondPlayerName: string
  firstPlayerSymbol: PlayerSymbol | null
}
