import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

export const signInAdmin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
