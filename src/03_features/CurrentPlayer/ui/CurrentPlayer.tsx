import CircleIcon from "@00_app/assets/icons/circle.svg?react"
import CrossIcon from "@00_app/assets/icons/cross.svg?react"
import { PlayerSymbol } from "@05_shared/models/global"
import type { IPlayer } from "@05_shared/models/player"
import type { FC } from "react"

interface Props {
  currentPlayer: IPlayer
}

const symbolIconMap = {
  [PlayerSymbol.X]: CrossIcon,
  [PlayerSymbol.O]: CircleIcon,
}

export const CurrentPlayer: FC<Props> = ({ currentPlayer }) => {
  const IconComponent = symbolIconMap[currentPlayer.symbol]

  return (
    <div className="flex w-full justify-center gap-2">
      <span className="flex-1">Current player:</span>

      <div className="mr-2 flex min-w-0 flex-1 items-center justify-end gap-2">
        <span
          className="highlight overflow-hidden text-ellipsis whitespace-nowrap"
          data-cy="current-player-name">
          {currentPlayer.name}
        </span>
        <IconComponent className="h-4 w-4" />
      </div>
    </div>
  )
}
