import type { FC } from "react"

interface Props {
  playerName: string
  record: number
}

export const LeaderboardItem: FC<Props> = ({ playerName, record }) => {
  return (
    <div className="flex gap-5" data-cy="leaderboard-list-item">
      <span className="flex-1">{playerName}</span>
      <span className="fle-1">{record}</span>
    </div>
  )
}
