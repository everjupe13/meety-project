import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.css'
import { ButtonFilledWith, ButtonSize, ButtonVariant } from './Button.types'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  filledWith?: ButtonFilledWith
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'normal',
  children,
  className,
  filledWith = 'default',
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles[variant],
        styles[size],
        styles[filledWith],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
