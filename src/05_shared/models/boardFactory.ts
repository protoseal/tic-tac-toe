import type { BoardProps, IBoard } from "./board"

export interface IBoardFactory {
  create(props: BoardProps): IBoard
}
