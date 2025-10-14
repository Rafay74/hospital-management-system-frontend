import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const res = await fetch('http://test.com', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      },
    }),
  ],
}

const handler = NextAuth(options)
export { handler as GET, handler as POST }
