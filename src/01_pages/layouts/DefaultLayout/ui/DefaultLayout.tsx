import { GameProvider } from "@00_app/plugins/game/GameProvider"
import { ModalProvider } from "@00_app/plugins/modal/ModalProvider"
import type { FC } from "react"
import { Outlet } from "react-router"

export const DefaultLayout: FC = () => {
  return (
    <ModalProvider>
      <GameProvider boardSize={3}>
        <div className="min-h-screen">
          <Outlet />
        </div>
      </GameProvider>
    </ModalProvider>
  )
}
