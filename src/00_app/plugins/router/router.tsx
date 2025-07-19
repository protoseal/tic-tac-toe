import { ROUTES_PATHS } from "@05_shared/config"
import { createHashRouter } from "react-router"

import { lazyLoad } from "./lazyLoad"

export const router = createHashRouter([
  {
    path: ROUTES_PATHS.index,
    element: lazyLoad("layouts/DefaultLayout"),
    children: [
      { index: true, element: lazyLoad("RegistrationPage") },
      { path: ROUTES_PATHS.game, element: lazyLoad("GamePage") },
    ],
  },
])
