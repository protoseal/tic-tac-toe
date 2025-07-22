import { UIModal } from "@05_shared/ui/UIModal"
import { type FC, type ReactNode, useState } from "react"

import { ModalContext } from "./modalContext"

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode | null>(null)

  const openModal = (modalContent: ReactNode) => {
    setContent(modalContent)
    setIsOpen(true)
    document.body.classList.add("no-scroll")
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.classList.remove("no-scroll")
  }

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {isOpen && <UIModal>{content}</UIModal>}
    </ModalContext.Provider>
  )
}
