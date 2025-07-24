import classNames from "classnames"
import { type ComponentPropsWithRef, forwardRef } from "react"

import "../styles/styles.scss"

interface Props extends ComponentPropsWithRef<"input"> {
  label?: string
  error?: string | undefined
}

export const UIInput = forwardRef<HTMLInputElement, Props>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-md" htmlFor={props.id}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={classNames(
            "input rounded-md bg-white p-3 text-lg text-black",
            { [className as string]: className },
          )}
          {...props}
        />

        <span className="min-h-5 text-sm text-red-500">{error}</span>
      </div>
    )
  },
)

UIInput.displayName = "UIInput"
