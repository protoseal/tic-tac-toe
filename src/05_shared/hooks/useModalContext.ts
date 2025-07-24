import { ModalContext } from "@00_app/plugins/modal/modalContext"
import { useContext } from "react"

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error("useModalContext must be used within a Modal provider")
  }

  return context
}
