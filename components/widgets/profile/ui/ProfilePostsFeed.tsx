import { FC } from 'react'

import ProfilePostsFeedCard from './ProfilePostsFeedCard'

const ProfilePostsFeed: FC = () => {
  return (
    <>
      <div className="content-box-styles">
        <ProfilePostsFeedCard type="article"></ProfilePostsFeedCard>
      </div>
    </>
  )
}

export default ProfilePostsFeed
