// Import Firebase Authentication functions and 'auth' module
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

// Export function 'signInAdmin' for signing in an administrator
export const signInAdmin = async (email, password) => {
  // Authenticate and sign in an admin user using the 'signInWithEmailAndPassword' function
  return signInWithEmailAndPassword(auth, email, password)
}
