import Paths from '../pods/Authentication/paths';
import firebase from 'firebase';
import keys from '../../.firebase/keys';

export const initConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  storageBucket: keys.storageBucket,
  projectId: keys.projectId,
};

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: Paths.Dashboard,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};