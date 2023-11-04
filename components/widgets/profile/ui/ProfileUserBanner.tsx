import Image from 'next/image'
import { FC } from 'react'

const ProfileUserBanner: FC = () => {
  return (
    <div className="content-box-styles overflow-hidden !p-0">
      <div className="flex aspect-[calc(875/285)] items-center justify-center overflow-hidden">
        <Image
          src="/images/mock-banner.png"
          width={875}
          height={285}
          alt=""
          className="block h-full w-full object-cover opacity-60"
        ></Image>
      </div>
      <div className="px-24 py-20">
        <div className="ml-[190px] flex items-center justify-between">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-28 font-medium leading-none">
              Kierra Rhiel Madsen
            </h1>
            <div className="text-16 flex items-center gap-x-5 leading-none text-white/50">
              <h2>@kierrkierr</h2>
              <div className="text-12 text-[#A4A4A5]/50">●</div>
              <p>1267 подписчиков</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserBanner
