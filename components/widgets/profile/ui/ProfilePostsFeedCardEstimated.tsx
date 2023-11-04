import {
  ArrowUturnRightIcon,
  ChatBubbleOvalLeftIcon,
  GiftIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { FC } from 'react'

import HearthLikeImage from '@/assets/img/hearth-like.png'

type Props = {
  liked: boolean
  setLiked: () => void
}

const ProfilePostsFeedCardEstimated: FC<Props> = ({ liked, setLiked }) => {
  return (
    <div className="flex items-center gap-x-8">
      <button
        className="flex items-center gap-x-4 rounded-[14px] bg-hover px-14 py-12 font-semibold leading-none text-white/60 text-16"
        onClick={() => setLiked()}
      >
        <span className="flex flex-shrink-0 items-center justify-center">
          {liked ? (
            <Image
              width={24}
              height={24}
              className="block"
              src={HearthLikeImage}
              alt=""
            ></Image>
          ) : (
            <HeartIcon className="h-24 w-24" />
          )}
        </span>
        <span>1,6К</span>
      </button>
      <button className="flex items-center gap-x-4 rounded-[14px] bg-hover px-14 py-12 font-semibold leading-none text-white/60 text-16">
        <span className="flex flex-shrink-0 items-center justify-center">
          <ChatBubbleOvalLeftIcon className="h-24 w-24" />
        </span>
        <span>235</span>
      </button>
      <button className="flex items-center gap-x-4 rounded-[14px] bg-hover px-14 py-12 font-semibold leading-none text-white/60 text-16">
        <span className="flex flex-shrink-0 items-center justify-center">
          <GiftIcon className="h-24 w-24" />
        </span>
        <span>43</span>
      </button>
      <button className="flex items-center gap-x-4 rounded-[14px] bg-hover px-14 py-12 font-semibold leading-none text-white/60 text-16">
        <span className="flex flex-shrink-0 items-center justify-center">
          <ArrowUturnRightIcon className="h-24 w-24" />
        </span>
        <span>17</span>
      </button>
    </div>
  )
}

export default ProfilePostsFeedCardEstimated
