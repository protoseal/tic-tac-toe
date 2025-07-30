import { ROUTES_PATHS } from "@05_shared/config"
import { useGameContext } from "@05_shared/hooks/useGameContext"
import { UIButton } from "@05_shared/ui/UIButton"
import { UITile } from "@05_shared/ui/UITile"
import { type FC, useState } from "react"
import { Link, useNavigate } from "react-router"

import { LeaderboardList } from "./LeaderboardList"

export const Leaderboard: FC = () => {
  const { game } = useGameContext()
  const navigate = useNavigate()

  const [leaderboard, setLeaderboard] = useState(
    game.leaderboard.getLeaderboardSortedArray(),
  )

  const handleClearLeaderboard = () => {
    game.leaderboard.clear()
    game.setPlayers(null)
    setLeaderboard(game.leaderboard.getLeaderboardSortedArray())
    navigate(ROUTES_PATHS.index)
  }

  return (
    <div className="flex flex-col gap-5">
      <UITile className="flex justify-center">
        <LeaderboardList leaderboard={leaderboard} />
      </UITile>

      <div className="flex gap-2">
        <Link
          className="flex-1"
          to={ROUTES_PATHS.game}
          data-cy="back-play-link">
          <UIButton className="h-full w-full">Play</UIButton>
        </Link>

        <UIButton
          className="flex-1 bg-red-500 text-xs"
          onClick={handleClearLeaderboard}>
          Clear leaderboard
        </UIButton>
      </div>
    </div>
  )
}
