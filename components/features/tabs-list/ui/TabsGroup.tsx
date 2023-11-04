import { FC } from 'react'

import { BadgeLink } from '@/components/entities/link'

import { TabItemType } from './TabList.types'

type Props = {
  items: TabItemType[]
}

const TabsGroup: FC<Props> = ({ items }) => {
  return (
    <nav>
      <ul className="flex items-center">
        {items &&
          items.map(item => (
            <li key={item.id} className="flex items-center justify-center">
              <BadgeLink to={item.to} wrapperClasses="max-h-42" prefetch={true}>
                {item.label}
              </BadgeLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default TabsGroup
