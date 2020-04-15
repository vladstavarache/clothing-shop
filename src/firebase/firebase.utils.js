import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBshmpK3haR8TxFIkECN5jcjNHwL9tDLsI",
  authDomain: "crwn-clothing-store-db.firebaseapp.com",
  databaseURL: "https://crwn-clothing-store-db.firebaseio.com",
  projectId: "crwn-clothing-store-db",
  storageBucket: "crwn-clothing-store-db.appspot.com",
  messagingSenderId: "389769445744",
  appId: "1:389769445744:web:ea4251825fe5ed77f2cfb5",
  measurementId: "G-2V5580XKX5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef =  firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;