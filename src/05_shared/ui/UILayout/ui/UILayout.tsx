import classNames from "classnames"
import type { FC, ReactNode } from "react"

interface Props {
  as: keyof HTMLElementTagNameMap
  className?: string
  children?: ReactNode
}

export const UILayout: FC<Props> = ({ as: Component, children, className }) => {
  return (
    <Component
      className={classNames("px-4", {
        [className as string]: className !== undefined,
      })}>
      {children}
    </Component>
  )
}
