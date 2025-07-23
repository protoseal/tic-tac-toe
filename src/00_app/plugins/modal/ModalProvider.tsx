import { UIModal } from "@05_shared/ui/UIModal"
import { type FC, type ReactNode, useState } from "react"
import Confetti from "react-confetti-boom"

import { ModalContext, type OpenModalConfig } from "./modalContext"

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode | null>(null)
  const [isConfetti, setIsConfetti] = useState<boolean>(false)

  const openModal = (modalContent: ReactNode, config?: OpenModalConfig) => {
    setContent(modalContent)
    setIsOpen(true)
    setIsConfetti(!!config?.isConfetti)
    document.body.classList.add("no-scroll")
  }

  const closeModal = () => {
    setIsOpen(false)
    setIsConfetti(false)
    document.body.classList.remove("no-scroll")
  }

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}

      {isConfetti && (
        <Confetti particleCount={60} className="absolute z-20 w-full" />
      )}

      {isOpen && <UIModal>{content}</UIModal>}
    </ModalContext.Provider>
  )
}
