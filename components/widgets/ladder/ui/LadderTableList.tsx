import clsx from 'clsx'
import { FC, ReactElement } from 'react'

type Props = {
  children?: ReactElement | JSX.Element | JSX.Element[]
  className?: string
}
const LadderTableList: FC<Props> = ({ children, className }) => {
  return (
    <ul className={clsx('flex flex-col gap-y-8', className)}>{children}</ul>
  )
}

export default LadderTableList
