import type { ReactNode } from "react"
import { createContext } from "react"

interface Context {
  isOpen: boolean
  content: ReactNode | null
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

export const ModalContext = createContext<Context>({
  isOpen: false,
  content: null,
  openModal: (content: ReactNode) => {
    void content
  },
  closeModal: () => {},
})
