import { RegistrationForm } from "@02_widgets/RegistrationForm"
import { UILayout } from "@05_shared/ui/UILayout/ui/UILayout"
import type { FC } from "react"

export const RegistrationPage: FC = () => {
  return (
    <UILayout
      as="main"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-5 py-5">
      <h1 className="is-montserrat mb-5 text-center text-5xl font-bold">
        Welcome to Tic Tac Toe
      </h1>
      <RegistrationForm />
    </UILayout>
  )
}
