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
    <div className="flex gap-2">
      <span>Current player:</span>

      <div className="flex items-center justify-center gap-2">
        <span className="highlight">{currentPlayer.name}</span>
        <IconComponent className="h-4 w-4" />
      </div>
    </div>
  )
}
