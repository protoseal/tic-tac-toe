import type { ICell } from "./cell"
import type { Coordinates, PlayerSymbol } from "./global"
import type { IPlayer } from "./player"

export interface IBoard {
  readonly cells: ICell[]
  checkWinner(): IPlayer | null
  setPlayerSymbolInCell(props: SetPlayerSymbolInCellProps): void
}

interface SetPlayerSymbolInCellProps {
  playerSymbol: PlayerSymbol
  cellCoordinates: Coordinates
}
