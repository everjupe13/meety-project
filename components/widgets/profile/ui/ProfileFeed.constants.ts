import { TabItemType } from '@/components/features/tabs-list'

export const ProfileNavigationTabs: TabItemType[] = [
  {
    id: 0,
    to: '/profile/streams',
    label: 'Стримы'
  },
  {
    id: 1,
    to: '/profile/posts',
    label: 'Посты'
  },
  {
    id: 2,
    to: '/profile/info',
    label: 'Информация'
  },
  {
    id: 3,
    to: '/profile/album',
    label: 'Фото'
  },
  {
    id: 4,
    to: '/profile/shorts',
    label: 'Тик-токи'
  },
  {
    id: 5,
    to: '/profile/fans',
    label: 'Фанаты'
  }
]
