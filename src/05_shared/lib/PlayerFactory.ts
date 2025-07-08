import type { IPlayer } from "05_shared/models/player"
import type { PlayerFactoryCreateProps } from "05_shared/models/playerFactory"

import { Player } from "./Player"

export class PlayerFactory {
  public static createPlayer(props: PlayerFactoryCreateProps): IPlayer {
    return new Player({ name: props.name, symbol: props.playerSymbol })
  }
}
