import { FC, ReactNode } from 'react'

import { TabsGroup } from '@/components/features/tabs-list'

import { ProfileNavigationTabs } from './ProfileFeed.constants'

type Props = {
  children?: ReactNode
}

const ProfileFeed: FC<Props> = ({ children }) => {
  return (
    <div className="content-box-styles">
      <TabsGroup items={ProfileNavigationTabs}></TabsGroup>

      <div className="my-18 h-1 bg-white/10"></div>

      <div className="min-h-[300px]">{children}</div>
    </div>
  )
}

export default ProfileFeed
