import { ROUTES_PATHS } from "@05_shared/config"
import { createHashRouter } from "react-router"

import { ProtectedProvider } from "../ProtectedProvider"
import { lazyLoad } from "./lazyLoad"

export const router = createHashRouter([
  {
    path: ROUTES_PATHS.index,
    element: lazyLoad("layouts/DefaultLayout"),
    children: [
      { index: true, element: lazyLoad("RegistrationPage") },
      {
        path: ROUTES_PATHS.game,
        element: <ProtectedProvider>{lazyLoad("GamePage")}</ProtectedProvider>,
      },
      {
        path: ROUTES_PATHS.leaderboard,
        element: (
          <ProtectedProvider>{lazyLoad("LeaderboardPage")}</ProtectedProvider>
        ),
      },
    ],
  },
])
