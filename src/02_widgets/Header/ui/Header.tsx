import type { FC } from "react"

import { HeaderNavigation } from "./HeaderNavigation"

export const Header: FC = () => {
  return (
    <header className="flex flex-col items-center justify-between gap-5 p-5 sm:flex-row">
      <div className="flex flex-col gap-1">
        <h1 className="is-montserrat text-4xl leading-none font-bold">
          Tic-Tac-Toe
        </h1>
        <span className="self-center text-sm sm:self-end-safe">
          by Vladimir Volkov
        </span>
      </div>

      <HeaderNavigation />
    </header>
  )
}
