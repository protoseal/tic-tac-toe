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
  const title = winnerPlayerName
    ? `Winner: ${winnerPlayerName}!`
    : isDraw
      ? "Draw!"
      : null

  return (
    <div className="flex min-w-0 flex-col gap-5">
      {title && (
        <h1 className="overflow-hidden text-center text-ellipsis whitespace-nowrap">
          {title}
        </h1>
      )}
      <UIButton onClick={handlePlayAgain}>Play again</UIButton>
    </div>
  )
}
