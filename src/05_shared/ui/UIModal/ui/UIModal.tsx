import { UITile } from "@05_shared/ui/UITile"
import { type FC, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const UIModal: FC<Props> = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/90" />

      <UITile className="onset z-30" onClick={(e) => e.stopPropagation()}>
        {children}
      </UITile>
    </div>
  )
}
