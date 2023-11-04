'use client'

import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import { TabsGroup } from '@/components/features/tabs-list'

import { useTabsInfo } from '../lib/useTabsInfo'
import { ProfileNavigationTabs } from './ProfileFeed.constants'

type Props = {
  children?: ReactNode
}

const ProfileFeed: FC<Props> = ({ children }) => {
  const { isUnstyledBorderRoute } = useTabsInfo()

  return (
    <>
      <div className="content-box-styles">
        <TabsGroup items={ProfileNavigationTabs}></TabsGroup>

        <div
          className={clsx('my-18 h-1', {
            'bg-white/10': !isUnstyledBorderRoute
          })}
        ></div>

        <div className="min-h-[300px]">{children}</div>
      </div>
    </>
  )
}

export default ProfileFeed
