import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'

function deriveKey(password: string, salt: string) {
  return scryptSync(password, salt, 64).toString('hex')
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex')
  const hash = deriveKey(password, salt)
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, stored] = storedHash.split(':')

  if (!salt || !stored) {
    return false
  }

  const incoming = deriveKey(password, salt)
  return timingSafeEqual(Buffer.from(incoming, 'hex'), Buffer.from(stored, 'hex'))
}
