import classNames from "classnames"
import type { CSSProperties, FC } from "react"

import "../styles/styles.scss"

interface Props {
  borderWidth?: number
  className?: string
}

export const UILoader: FC<Props> = ({ borderWidth = 4, className }) => {
  const style: CSSProperties = { borderWidth: `${borderWidth}px` }

  return (
    <div
      className={classNames("flex flex-col items-center justify-center gap-5", {
        [className as string]: className,
      })}>
      <div className="loader" style={style}></div>
      <span>Loading...</span>
    </div>
  )
}
