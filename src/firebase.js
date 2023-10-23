import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDsdJEEH5OvwkTVVt7utasZhMD7-guA_zA',
  authDomain: 'frog-shop-f49e2.firebaseapp.com',
  projectId: 'frog-shop-f49e2',
  storageBucket: 'frog-shop-f49e2.appspot.com',
  messagingSenderId: '983902552548',
  appId: '1:983902552548:web:cddc6854d6e690a1afc7f1'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
