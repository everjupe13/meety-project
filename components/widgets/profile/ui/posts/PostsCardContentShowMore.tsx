'use client'
import { FC } from 'react'

type Props = {
  expanded?: boolean
  handleExpanded?: () => void
}

const PostsCardContentShowMore: FC<Props> = ({ expanded, handleExpanded }) => {
  return (
    !expanded && (
      <p
        className="relative inline-block translate-y-[0.5px] cursor-pointer px-3 font-semibold leading-normal text-orange text-16"
        onClick={handleExpanded}
      >
        Показать все
      </p>
    )
  )
}

export default PostsCardContentShowMore
