import { UITile } from "@05_shared/ui/UITile"
import { type FC, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const UIModal: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/90" />
      <UITile
        className="onset absolute top-1/2 left-1/2 z-20 -translate-1/2"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </UITile>
    </div>
  )
}
