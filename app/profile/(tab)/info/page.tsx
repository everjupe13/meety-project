import { FC } from 'react'

import { ProfileFeed, ProfilePersonalInfo } from '@/components/widgets/profile'

const InfoTab: FC = () => {
  return (
    <ProfileFeed>
      <div className="pb-[155px]">
        <ProfilePersonalInfo />
      </div>
    </ProfileFeed>
  )
}

export default InfoTab
