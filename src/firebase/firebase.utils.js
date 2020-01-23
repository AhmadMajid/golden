import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAfrjuYA5xsn5RO2jD344yS-LhyI5lFrE",
    authDomain: "goldenshoe-db.firebaseapp.com",
    databaseURL: "https://goldenshoe-db.firebaseio.com",
    projectId: "goldenshoe-db",
    storageBucket: "goldenshoe-db.appspot.com",
    messagingSenderId: "879352952719",
    appId: "1:879352952719:web:b91c6cf14d59ff9dd27dfa",
    measurementId: "G-8NGMQPR426"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }   catch (error) {
            console.log('error creating user', error.message);
        }
      }

      return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;