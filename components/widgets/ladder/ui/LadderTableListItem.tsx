import clsx from 'clsx'
import { FC, ReactElement } from 'react'

type Props = {
  children?: string | ReactElement | JSX.Element | JSX.Element[]
  className?: string
}
const LadderTableListItem: FC<Props> = ({ children, className }) => {
  return <li className={clsx('', className)}>{children}</li>
}

export default LadderTableListItem
