import CircleIcon from "@00_app/assets/icons/circle.svg?react"
import CrossIcon from "@00_app/assets/icons/cross.svg?react"
import { PlayerSymbol } from "@05_shared/models/global"
import classNames from "classnames"
import type { FC } from "react"

interface Props {
  playerName: string
  disabled: boolean
  selected: PlayerSymbol | null
  handleSelect(playerSymbol: PlayerSymbol): void
}

export const RegistrationFormSelectSymbol: FC<Props> = ({
  playerName,
  disabled,
  selected,
  handleSelect,
}) => {
  return (
    <div
      className={classNames("flex flex-col gap-4 transition-[filter]", {
        ["pointer-events-none brightness-50"]: disabled,
      })}>
      <div className="text-md text-center sm:text-xl">
        <span className="highlight">{playerName}</span>{" "}
        <span>select you&apos;re symbol</span>
      </div>

      <div className="flex flex-wrap gap-5">
        <button
          className={classNames("select-symbol__symbol flex-1 p-2 sm:p-7", {
            ["select-symbol__symbol--active"]: selected === PlayerSymbol.X,
          })}
          type="button"
          onClick={() => handleSelect(PlayerSymbol.X)}>
          <CrossIcon className="max-w-22 sm:max-w-full" />
        </button>
        <button
          className={classNames("select-symbol__symbol flex-1 p-2 sm:p-7", {
            ["select-symbol__symbol--active"]: selected === PlayerSymbol.O,
          })}
          type="button"
          onClick={() => handleSelect(PlayerSymbol.O)}>
          <CircleIcon className="max-w-22 sm:max-w-full" />
        </button>
      </div>
    </div>
  )
}
