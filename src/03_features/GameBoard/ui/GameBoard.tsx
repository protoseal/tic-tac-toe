import type { CellMatrix } from "@05_shared/models/board"
import type { IBoardRenderer } from "@05_shared/models/boardRenderer"
import type { Coordinates } from "@05_shared/models/global"
import { type FC, useEffect, useRef } from "react"

import { BoardRenderer } from "../lib/BoardRenderer"

interface Props {
  cells: CellMatrix
  handleMakeMove(coordinates: Coordinates): void
}

export const GameBoard: FC<Props> = ({ handleMakeMove, cells }) => {
  const renderer = useRef<IBoardRenderer | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (!canvasRef.current) return

    renderer.current = new BoardRenderer({
      canvas: canvasRef.current,
      size: 3,
      clickHandler: handleMakeMove,
    })

    if (!isInitialized.current) {
      renderer.current.setupEventListeners()
      isInitialized.current = true
    }

    return () => {
      renderer.current?.destroy()
    }
  }, [])

  useEffect(() => {
    renderer.current?.render(cells)
  }, [cells])

  return <canvas ref={canvasRef} id="game-canvas" />
}
