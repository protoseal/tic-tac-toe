import { UIButton } from "@05_shared/ui/UIButton"
import type { FC } from "react"

interface Props {
  winnerPlayerName: string | undefined
  isDraw: boolean
  handlePlayAgain: () => void
}

export const GameWinnerModalContent: FC<Props> = ({
  winnerPlayerName,
  isDraw,
  handlePlayAgain,
}) => {
  const title = isDraw
    ? "Draw!"
    : winnerPlayerName && `Winner: ${winnerPlayerName}!`

  return (
    <div className="flex min-w-0 flex-col gap-5">
      {title && (
        <h1
          className="overflow-hidden text-center text-ellipsis whitespace-nowrap"
          data-cy="winner-modal-title">
          {title}
        </h1>
      )}
      <UIButton onClick={handlePlayAgain}>Play again</UIButton>
    </div>
  )
}
