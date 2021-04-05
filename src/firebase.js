import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  authDomain: 'pocketools.firebaseapp.com',
  projectID: 'pocketools',
  storageBucket: 'pocketools.appspot.com',
  messagingSenderId: '21023039237',
  appId: '1:21023039237:web:d00813f45d64764a94e16c',
  measurementId: 'G-Z5RMHRZ41N',
  apiKey: 'AIzaSyAUDMN4ymWvkmGQm86h1VJvy7TAvpp8fF8',
});

export const auth = app.auth();
export default app;
