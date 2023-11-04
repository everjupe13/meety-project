import './BadgeLink.scss'

import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import ActiveLink from './ActiveLink'

type Props = {
  children?: ReactNode | string
  to?: string
  wrapperClasses?: string
  prefetch?: boolean
}
const BadgeLink: FC<Props> = ({ children, to, wrapperClasses, prefetch }) => {
  return (
    <ActiveLink
      prefetch={!!prefetch}
      href={to || ''}
      scroll={false}
      activeClassName="badge-link_active"
      className={twMerge(
        clsx(
          wrapperClasses,
          'group flex items-center justify-center rounded-[14px] bg-transparent p-14 transition-all'
        )
      )}
    >
      <span className="font-semibold text-primary-foreground opacity-70 text-14 group-hover:opacity-100">
        {children}
      </span>
    </ActiveLink>
  )
}

export default BadgeLink
