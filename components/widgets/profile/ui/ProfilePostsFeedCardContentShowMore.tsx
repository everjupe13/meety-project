'use client'
import { FC } from 'react'

type Props = {
  expanded?: boolean
  handleExpanded?: () => void
}

const ProfilePostsFeedCardContentShowMore: FC<Props> = ({
  expanded,
  handleExpanded
}) => {
  return (
    !expanded && (
      <p
        className="text-orange relative inline-block translate-y-[0.5px] cursor-pointer px-3 font-semibold leading-normal text-16"
        onClick={handleExpanded}
      >
        Показать все
      </p>
    )
  )
}

export default ProfilePostsFeedCardContentShowMore
