'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { UnstyledBorderPaths } from './constants'

export const useTabsInfo = () => {
  const asPath = usePathname()
  const isUnstyledBorderRoute = useMemo(
    () => UnstyledBorderPaths.some(path => asPath.includes(path)),
    [asPath]
  )

  return { isUnstyledBorderRoute }
}
