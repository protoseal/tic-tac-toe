import { RegistrationForm } from "@02_widgets/RegistrationForm"
import { UILayout } from "@05_shared/ui/UILayout/ui/UILayout"
import type { FC } from "react"

export const RegistrationPage: FC = () => {
  return (
    <UILayout
      as="main"
      className="onset flex flex-1 items-center justify-center">
      <RegistrationForm />
    </UILayout>
  )
}
