import { Game } from "@02_widgets/Game"
import { UILayout } from "@05_shared/ui/UILayout"
import { type FC } from "react"

export const GamePage: FC = () => {
  return (
    <UILayout
      as="main"
      className="flex min-h-screen items-center justify-center">
      <Game />
    </UILayout>
  )
}
