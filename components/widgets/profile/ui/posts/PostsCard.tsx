'use client'
import { FC, useState } from 'react'

import PostsCardContent from './PostsCardContent'
import PostsCardContentShowMore from './PostsCardContentShowMore'
import PostsCardEstimated from './PostsCardEstimated'
import PostsCardGallery from './PostsCardGallery'
import PostsCardHeader from './PostsCardHeader'

type Props = {
  type: 'gallery' | 'article' | 'pay-article'
}
const PostsCard: FC<Props> = ({ type }) => {
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
      <PostsCardHeader />
      <div className="mb-6">
        {type === 'article' ? (
          <>
            <PostsCardContent expanded={bodyExpanded} />
            <PostsCardContentShowMore
              handleExpanded={handleBodyExpandClick}
              expanded={bodyExpanded}
            />
          </>
        ) : (
          <>
            <PostsCardGallery />
          </>
        )}
      </div>
      <PostsCardEstimated liked={postLiked} setLiked={handlePostLike} />
    </article>
  )
}

export default PostsCard
