'use client'
import { createContext } from 'react'

export type AuthProviderContextType = {
  beforeLogoutHook?: () => void
}

export const AuthProviderContext = createContext<AuthProviderContextType>({})
