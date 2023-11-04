import { FC } from 'react'

import {
  ProfileFeed,
  ProfilePostsFeed,
  ProfilePostsFeedCard
} from '@/components/widgets/profile'

const PostsTab: FC = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <ProfileFeed>
        <ProfilePostsFeedCard type="gallery" />
      </ProfileFeed>
      <ProfilePostsFeed />
    </div>
  )
}

export default PostsTab
