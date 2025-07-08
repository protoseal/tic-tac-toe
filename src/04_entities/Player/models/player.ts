import type { PlayerSymbol } from "05_shared/models/global"
import type { IPlayer, PlayerProps } from "05_shared/models/player"

export class Player implements IPlayer {
  private _name: string
  private _symbol: PlayerSymbol

  constructor(props: PlayerProps) {
    this._name = props.name
    this._symbol = props.symbol
  }

  /* === Getters/Setters === */

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get symbol() {
    return this._symbol
  }

  set symbol(value: PlayerSymbol) {
    this.symbol = value
  }
}
