import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB-JtB1nnNqGEBdqj5oMupAwp1QAa1XO_Y",
  authDomain: "my-clothes-store-da23b.firebaseapp.com",
  projectId: "my-clothes-store-da23b",
  storageBucket: "my-clothes-store-da23b.appspot.com",
  messagingSenderId: "410011471735",
  appId: "1:410011471735:web:18e864e63afd41915f1b72",
  measurementId: "G-Y9JEPRJ8E4"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'User@example.com',
  'prompt': 'select_account'
});

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = store.doc(`Users/${userAuth.uid}`);
  if (!(await userRef.get()).exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('create User failed', err.message);
    }
  }
  return userRef;
}

export const addObjectsToCollection = async (collectionKey, objects) => {
  const collectionRef = store.collection(collectionKey);

  const batch = store.batch();
  objects.forEach((object) => {
    console.log(object);
    const objRef = collectionRef.doc()
    batch.set(objRef, object)
  })
  return await batch.commit();
}
export const auth = firebase.auth();
export const store = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
