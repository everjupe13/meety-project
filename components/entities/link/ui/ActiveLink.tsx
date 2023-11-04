'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Children, FC, ReactElement, ReactNode, useMemo } from 'react'

type Props = {
  children?: ReactNode
  activeClassName?: string
  activeChildClassName?: string
  href: string
  prefetch?: boolean
  as?: string
  className?: string
}

const ActiveLink: FC<Props> = ({
  children,
  activeClassName,
  activeChildClassName,
  className,
  ...props
}) => {
  const asPath = usePathname()
  const child = Children.only(children) as ReactElement
  const childClassName = child?.props?.className || ''

  const isActive = useMemo(
    () => asPath === props?.href || asPath === props?.as,
    [asPath, props?.href, props?.as]
  )

  const childClassNames = isActive
    ? `${childClassName} ${activeChildClassName}`.trim()
    : childClassName

  return (
    <Link
      className={clsx(className, { [activeClassName || '']: isActive })}
      {...props}
    >
      {React.cloneElement(child, {
        className: childClassNames || null
      })}
    </Link>
  )
}

export default ActiveLink
