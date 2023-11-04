import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { EyeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { FC } from 'react'

import UserImage from '@/assets/img/user-girl.png'

const ProfilePostsFeedCardHeader: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-grow items-center gap-x-8">
        <div className="h-40 w-40 overflow-hidden rounded-full">
          <Image src={UserImage} width={40} height={40} alt="" />
        </div>

        <div className="flex items-center gap-x-5 leading-none text-white/50 text-16">
          <h3 className="text-white">@kierrkierr</h3>
          <div className="text-[#A4A4A5]/50 text-12">●</div>
          <p>13 дней назад</p>
          <div className="text-[#A4A4A5]/50 text-12">●</div>
          <div className="flex items-center gap-x-5">
            <EyeIcon className="w-16" />
            <p>12.6К</p>
          </div>
        </div>
      </div>
      <div className="h-40 w-40 flex-shrink-0">
        <button className="flex h-full w-full items-center justify-center rounded-[8px] transition-all hover:bg-hover">
          <EllipsisHorizontalIcon className="h-28 w-28 text-white/25" />
        </button>
      </div>
    </div>
  )
}

export default ProfilePostsFeedCardHeader
