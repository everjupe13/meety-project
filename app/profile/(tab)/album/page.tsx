import { FC } from 'react'

import { ProfileAlbumTab, ProfileFeed } from '@/components/widgets/profile'

const AlbumTab: FC = () => {
  return (
    <ProfileFeed>
      <ProfileAlbumTab></ProfileAlbumTab>
    </ProfileFeed>
  )
}

export default AlbumTab
