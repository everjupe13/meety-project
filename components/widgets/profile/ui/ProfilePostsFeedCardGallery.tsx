import Image from 'next/image'
import { FC } from 'react'

const ProfilePostsFeedCardGallery: FC = ({}) => {
  return (
    <div className="grid grid-cols-[calc(55%-6px)_calc(45%-6px)] gap-12">
      <div className="row-span-2 flex items-center justify-center overflow-hidden rounded-[14px]">
        <Image
          src="/images/mock-girl-gallery1.jpg"
          width={500}
          height={500}
          className="block h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex aspect-[calc(350/227)] items-center justify-center overflow-hidden rounded-[14px]">
        <Image
          src="/images/mock-girl-gallery2.jpg"
          width={500}
          height={500}
          className="block h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="aspect-[calc(350/227) flex items-center justify-center overflow-hidden rounded-[14px]">
        <Image
          src="/images/mock-girl-gallery3.jpg"
          width={500}
          height={500}
          className="block h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  )
}

export default ProfilePostsFeedCardGallery
