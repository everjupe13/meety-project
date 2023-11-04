import { FC, ReactNode } from 'react'

import AuthProvider from './AuthProvider'

type Props = {
  children?: ReactNode
}
const AuthContainer: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default AuthContainer
