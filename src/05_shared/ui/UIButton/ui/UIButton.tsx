import classNames from "classnames"
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react"

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode
}

export const UIButton: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        "cursor-pointer rounded-xl bg-green-500 px-4 py-3 font-bold uppercase transition-all hover:brightness-110 active:brightness-75 disabled:cursor-auto disabled:brightness-50",
        { [className as string]: className !== undefined },
      )}
      {...props}>
      {children}
    </button>
  )
}
