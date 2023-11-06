import { FC } from 'react'

import {
  Posts,
  PostsCard,
  ProfileFeedHeader
} from '@/components/widgets/profile'

const PostsTab: FC = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <ProfileFeedHeader>
        <PostsCard type="gallery" />
      </ProfileFeedHeader>
      <Posts />
    </div>
  )
}

export default PostsTab
