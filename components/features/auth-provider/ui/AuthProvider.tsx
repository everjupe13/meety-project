'use client'
import { FC, ReactNode } from 'react'

import { AuthProviderContext, AuthProviderContextType } from '../model/contexts'

type Props = {
  children?: ReactNode
}
const AuthProvider: FC<Props> = ({ children }) => {
  const cartLogoutActions = () => {
    console.log('logout cart, empties')
  }
  const profileLogoutActions = () => {
    console.log('user logout')
  }

  const authProviderContext: AuthProviderContextType = {
    beforeLogoutHook: () => {
      cartLogoutActions()
      profileLogoutActions()
    }
  }

  return (
    <AuthProviderContext.Provider value={authProviderContext}>
      {children}
    </AuthProviderContext.Provider>
  )
}

export default AuthProvider
