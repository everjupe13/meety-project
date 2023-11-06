import clsx from 'clsx'
import { FC, ReactElement } from 'react'

type Props = {
  children?: ReactElement | string
  className?: string
}
const UserSlug: FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx('leading-none text-white/50 text-16', className)}>
      {children}
    </div>
  )
}

const UserSlugDivider: FC = () => {
  return <div className="px-5 text-[#A4A4A5]/50 text-12">●</div>
}

export { UserSlug, UserSlugDivider }
