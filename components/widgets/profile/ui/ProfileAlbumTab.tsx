import clsx from 'clsx'
import { FC } from 'react'

import AlbumCard from './album/AlbumCard'

type Props = {
  className?: string
}
const ProfileAlbumTab: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <div className="mb-18">
        <h1 className="font-sf-pre font-medium leading-none text-24">
          16 фото
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-12">
        <AlbumCard image="/images/mock-girl-avatar.jpg" />
        <AlbumCard image="/images/mock-girl-avatar.jpg" />
        <AlbumCard image="/images/mock-girl-avatar.jpg" />
        <AlbumCard image="/images/mock-girl-avatar.jpg" />
        <AlbumCard image="/images/mock-girl-avatar.jpg" restricted />
        <AlbumCard image="/images/mock-girl-avatar.jpg" restricted />
        <AlbumCard image="/images/mock-girl-avatar.jpg" restricted />
        <AlbumCard image="/images/mock-girl-avatar.jpg" restricted />
      </div>
    </div>
  )
}

export default ProfileAlbumTab
