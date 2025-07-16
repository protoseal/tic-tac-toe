import type { BoardProps, IBoard } from "@05_shared/models/board"
import type { IBoardFactory } from "@05_shared/models/boardFactory"

import { Board } from "./Board"

export class BoardFactory implements IBoardFactory {
  public create(props: BoardProps): IBoard {
    return new Board(props)
  }
}
