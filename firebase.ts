// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhA2mBKwg3sEceuiuDQBRn5MG-7hjqkZw',
  authDomain: 'netflix-clone-49b1c.firebaseapp.com',
  projectId: 'netflix-clone-49b1c',
  storageBucket: 'netflix-clone-49b1c.appspot.com',
  messagingSenderId: '344259093173',
  appId: '1:344259093173:web:d9d04dfe2d6ffe4c7b54fc',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
