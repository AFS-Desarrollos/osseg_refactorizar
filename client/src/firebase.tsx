import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  //@ts-ignore
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //@ts-ignore
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //@ts-ignore
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //@ts-ignore
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //@ts-ignore
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //@ts-ignore
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //@ts-ignore
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
