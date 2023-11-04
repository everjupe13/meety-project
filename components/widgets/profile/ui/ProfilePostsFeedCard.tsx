'use client'
import { FC, useState } from 'react'

import ProfilePostsFeedCardContent from './ProfilePostsFeedCardContent'
import ProfilePostsFeedCardContentShowMore from './ProfilePostsFeedCardContentShowMore'
import ProfilePostsFeedCardEstimated from './ProfilePostsFeedCardEstimated'
import ProfilePostsFeedCardGallery from './ProfilePostsFeedCardGallery'
import ProfilePostsFeedCardHeader from './ProfilePostsFeedCardHeader'

type Props = {
  type: 'gallery' | 'article' | 'pay-article'
}
const ProfilePostsFeedCard: FC<Props> = ({ type }) => {
  const [postLiked, setPostLiked] = useState(false)
  const handlePostLike = () => {
    setPostLiked(postLiked => !postLiked)
  }

  const [bodyExpanded, setBodyExpanded] = useState(false)
  const handleBodyExpandClick = () => {
    setBodyExpanded(true)
  }
  return (
    <article className="flex flex-col gap-y-18">
      <ProfilePostsFeedCardHeader />
      <div className="mb-6">
        {type === 'article' ? (
          <>
            <ProfilePostsFeedCardContent expanded={bodyExpanded} />
            <ProfilePostsFeedCardContentShowMore
              handleExpanded={handleBodyExpandClick}
              expanded={bodyExpanded}
            />
          </>
        ) : (
          <>
            <ProfilePostsFeedCardGallery />
          </>
        )}
      </div>
      <ProfilePostsFeedCardEstimated
        liked={postLiked}
        setLiked={handlePostLike}
      />
    </article>
  )
}

export default ProfilePostsFeedCard
