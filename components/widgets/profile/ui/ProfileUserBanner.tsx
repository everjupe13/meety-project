import Image from 'next/image'
import { FC } from 'react'

import {
  UserAvatar,
  UserSlug,
  UserSlugDivider
} from '@/components/entities/user'
import { Button } from '@/components/shared/button'

const ProfileUserBanner: FC = () => {
  return (
    <div className="content-box-styles min-h-[280px] overflow-hidden !p-0">
      <div className="flex aspect-[calc(875/285)] items-center justify-center overflow-hidden">
        <Image
          src="/images/mock-banner.png"
          width={875}
          height={285}
          alt=""
          priority={true}
          className="block h-full w-full object-cover opacity-60"
        ></Image>
      </div>
      <div className="px-24 py-20">
        <div className="flex items-stretch gap-x-18">
          <div className="relative min-w-[166px]">
            <UserAvatar circled={8} className="absolute -bottom-8 left-0" />
          </div>
          <div className="flex flex-grow items-center justify-between">
            <div className="flex flex-grow flex-col gap-y-8">
              <h1 className="font-medium leading-none text-28">
                Kierra Rhiel Madsen
              </h1>
              <div className="flex items-center">
                <UserSlug>
                  <h2>@kierrkierr</h2>
                </UserSlug>
                <UserSlugDivider />
                <UserSlug>
                  <p>1267 подписчиков</p>
                </UserSlug>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-8">
              <Button>Подписаться</Button>
              <Button filledWith="icon" variant="secondary"></Button>
              <Button filledWith="icon" variant="secondary"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserBanner
