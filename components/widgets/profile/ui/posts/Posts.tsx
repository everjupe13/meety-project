import { FC } from 'react'

import PostsCard from './PostsCard'

const Posts: FC = () => {
  return (
    <>
      <div className="content-box-styles">
        <PostsCard type="article"></PostsCard>
      </div>
    </>
  )
}

export default Posts
