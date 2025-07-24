import type { LeaderboardArray } from "@05_shared/models/leaderboardRepository"
import type { FC } from "react"

import { LeaderboardItem } from "./LeaderboardItem"

interface Props {
  leaderboard: LeaderboardArray
}

export const LeaderboardList: FC<Props> = ({ leaderboard }) => {
  if (leaderboard.length <= 0) return <span>Leaderboard is empty</span>

  return (
    <ul>
      {leaderboard.map(([playerName, record], key) => {
        return (
          <li className="mb-1" key={key}>
            <LeaderboardItem playerName={playerName} record={record} />
          </li>
        )
      })}
    </ul>
  )
}
