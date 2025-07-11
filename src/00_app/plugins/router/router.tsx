import { createHashRouter } from "react-router"

import { lazyLoad } from "./lazyLoad"

export const router = createHashRouter([
  {
    path: "/",
    element: lazyLoad("layouts/DefaultLayout"),
    children: [{ index: true, element: lazyLoad("RegistrationPage") }],
  },
])
