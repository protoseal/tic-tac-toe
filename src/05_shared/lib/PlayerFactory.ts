import type { IPlayer, PlayerProps } from "05_shared/models/player"
import type { IPlayerFactory } from "05_shared/models/playerFactory"

import { Player } from "./Player"

export class PlayerFactory implements IPlayerFactory {
  public create(props: PlayerProps): IPlayer {
    return new Player(props)
  }
}
