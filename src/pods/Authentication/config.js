import Paths from './paths';
import firebase from 'firebase';

export const initConfig = {
  apiKey: 'AIzaSyAWGFvvlOcOysAUbBy1K5gYbQr7hNN_6W4',
  authDomain: 'reactfirebasefedtest.firebaseapp.com',
};

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: Paths.Dashboard,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};