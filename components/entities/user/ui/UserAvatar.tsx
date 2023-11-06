import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  className?: string
  circled?: number
  src?: string
  width?: number
  height?: number
  style?: Record<string, string>
}

const UserAvatar: FC<Props> = ({ className, circled, src, style }) => {
  return (
    <>
      <div
        className={clsx(
          'flex aspect-square h-[166px] w-[166px] items-center justify-center overflow-hidden rounded-full bg-foreground',
          circled === undefined ? '' : `p-${circled}`,
          className
        )}
        style={style}
      >
        <div className="h-full w-full overflow-hidden rounded-full">
          <Image
            src={src || '/images/mock-girl-avatar.jpg'}
            width={200}
            height={200}
            alt=""
            className="block h-full w-full object-cover opacity-60"
          />
        </div>
      </div>
    </>
  )
}

export default UserAvatar
