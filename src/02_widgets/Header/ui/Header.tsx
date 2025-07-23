import type { FC } from "react"

import { HeaderNavigation } from "./HeaderNavigation"

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex flex-col">
        <h1 className="is-montserrat text-4xl leading-none font-bold">
          Tic-Tac-Toe
        </h1>
        <span className="self-end-safe text-sm">by Vladimir Volkov</span>
      </div>

      <HeaderNavigation />
    </header>
  )
}
