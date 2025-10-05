import { ReactNode } from 'react'
import { ReactQueryProvider } from './react-query-provider'
import { ToastProvider } from './toast-provider'
import { AuthProvider } from './auth-provider'
import { Session } from 'next-auth'

export function Providers({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}) {
  return (
    <ReactQueryProvider>
      <AuthProvider session={session}>
        {children}
        <ToastProvider />
      </AuthProvider>
    </ReactQueryProvider>
  )
}
