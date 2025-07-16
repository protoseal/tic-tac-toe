import classNames from "classnames"
import { type FC } from "react"

import "../styles/styles.scss"

interface Props {
  as?: keyof HTMLElementTagNameMap
  children?: React.ReactNode
  className?: string
}

export const UITile: FC<Props> = ({
  as: Component = "div",
  children,
  className,
}) => {
  return (
    <Component
      className={classNames("tile rounded-2xl p-5", {
        [className as string]: className,
      })}>
      {children}
    </Component>
  )
}
