import clsx from 'clsx'
import { FC, ReactElement } from 'react'

import { UserName, UserSlug } from '@/components/entities/user'
import { UserAvatarNav } from '@/components/features/user-nav'

type Props = {
  children?: ReactElement | string
  className?: string
  index?: number
  userName?: string
  userSlug?: string
}
const LadderUserCard: FC<Props> = ({
  className,
  index,
  userName,
  userSlug
}) => {
  return (
    <div
      className={clsx('bg-cards h-69 rounded-[14px] px-16 py-14', className)}
    >
      <div className="flex items-center gap-x-16">
        <div className="flex h-34 w-34 items-center justify-center rounded-full bg-hover p-3">
          {index}
        </div>
        <div className="flex h-40 items-center gap-x-8">
          <UserAvatarNav
            width={40}
            height={40}
            src="/images/mock-boy-avatar.png"
          />
          <div className="flex flex-col gap-y-4">
            <UserName>{userName}</UserName>
            <UserSlug>{userSlug}</UserSlug>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LadderUserCard
