import type { IPlayer, PlayerProps } from "./player"

export interface IPlayerFactory {
  create(props: PlayerProps): IPlayer
}
