import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  authDomain: process.env.AUTH_DOMAIN,
  projectID: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  apiKey: process.env.API_KEY,
});

export const auth = app.auth();
export default app;
