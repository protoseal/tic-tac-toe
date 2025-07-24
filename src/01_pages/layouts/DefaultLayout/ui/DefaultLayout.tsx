import { GameProvider } from "@00_app/plugins/game/GameProvider"
import { ModalProvider } from "@00_app/plugins/modal/ModalProvider"
import { Header } from "@02_widgets/Header"
import type { FC } from "react"
import { Outlet } from "react-router"

export const DefaultLayout: FC = () => {
  return (
    <ModalProvider>
      <GameProvider boardSize={3}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Outlet />
        </div>
      </GameProvider>
    </ModalProvider>
  )
}
