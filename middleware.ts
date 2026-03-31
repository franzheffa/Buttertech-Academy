export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/espace/:path*', '/attestation', '/sondage'],
}
