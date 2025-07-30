import { Leaderboard } from "@02_widgets/Leaderboard"
import { UILayout } from "@05_shared/ui/UILayout"
import type { FC } from "react"

export const LeaderboardPage: FC = () => {
  return (
    <UILayout
      as="main"
      className="onset flex flex-1 flex-col items-center justify-center gap-5"
      data-cy="leaderboard-page">
      <h1 className="is-montserrat text-4xl font-bold">Leaderboard</h1>
      <Leaderboard />
    </UILayout>
  )
}
