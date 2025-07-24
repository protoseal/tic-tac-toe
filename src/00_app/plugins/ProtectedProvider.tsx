import { ROUTES_PATHS } from "@05_shared/config"
import { useGameContext } from "@05_shared/hooks/useGameContext"
import type { FC, ReactNode } from "react"
import { Navigate } from "react-router"

interface Props {
  children: ReactNode
}

export const ProtectedProvider: FC<Props> = ({ children }) => {
  const { game } = useGameContext()

  if (!game.isPlayersRegistered) {
    return <Navigate to={ROUTES_PATHS.index} replace />
  }

  return children
}
