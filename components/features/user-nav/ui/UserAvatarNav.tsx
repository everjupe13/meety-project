import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { UserAvatar } from '@/components/entities/user'

type Props = {
  className?: string
  src?: string
  width?: number
  height?: number
}

const UserAvatarNav: FC<Props> = ({
  width = 48,
  height = 48,
  src,
  className
}) => {
  return (
    <Link
      href="/profile"
      className={twMerge(
        clsx(
          'flex h-48 w-48 items-center justify-center overflow-hidden rounded-full',
          className
        )
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <UserAvatar
        width={width}
        height={height}
        src={src || ''}
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      ></UserAvatar>
    </Link>
  )
}

export default UserAvatarNav
