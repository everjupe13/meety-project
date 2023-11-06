import clsx from 'clsx'
import { FC, ReactElement } from 'react'

type Props = {
  children?: ReactElement | string
  className?: string
}
const UserName: FC<Props> = ({ children, className }) => {
  return <div className={clsx('', className)}>{children}</div>
}

export default UserName
