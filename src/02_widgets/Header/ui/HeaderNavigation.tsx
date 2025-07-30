import { ROUTES_PATHS } from "@05_shared/config"
import { UIButton } from "@05_shared/ui/UIButton"
import type { FC } from "react"
import { Link, useLocation } from "react-router"

export const HeaderNavigation: FC = () => {
  const location = useLocation()

  return (
    <nav>
      <ul className="text-sm">
        {location.pathname === ROUTES_PATHS.game && (
          <li>
            <Link to={ROUTES_PATHS.leaderboard} data-cy="leaderboard-link">
              <UIButton>Leaderboard</UIButton>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
