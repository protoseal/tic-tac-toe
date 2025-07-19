import type { FC } from "react"
import { Outlet } from "react-router"

export const DefaultLayout: FC = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  )
}
