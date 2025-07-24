import { router } from "@00_app/plugins/router"
import type { FC } from "react"
import { RouterProvider } from "react-router"

import "../styles/index.css"

export const App: FC = () => {
  return <RouterProvider router={router} />
}
