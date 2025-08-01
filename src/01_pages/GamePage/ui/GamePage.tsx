import { Game } from "@02_widgets/Game"
import { UILayout } from "@05_shared/ui/UILayout"
import { type FC } from "react"

export const GamePage: FC = () => {
  return (
    <UILayout
      as="main"
      className="onset flex flex-1 items-center justify-center"
      data-cy="game-page">
      <Game />
    </UILayout>
  )
}
