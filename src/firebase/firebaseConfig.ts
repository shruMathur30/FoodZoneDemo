import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBwOHKfNLa6D58WuZWMPVipi5ZRu6Ygojw',
  authDomain: 'foodzone-925f5.firebaseapp.com',
  projectId: 'foodzone-925f5',
  storageBucket: 'foodzone-925f5.appspot.com',
  messagingSenderId: '569667756658',
  appId: '1:569667756658:android:6f6024cd22a308225f58eb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
