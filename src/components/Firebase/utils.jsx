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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
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

export const convertCollectionsToMaps = (collectionSnapshot) => {
  const collections = collectionSnapshot.docs.map(doc => {
    const {items, title} = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  });
  return collections.reduce((cumulative, curr) => {
      cumulative[curr.title.toLowerCase()] = curr
      return cumulative;
    }
    , {});
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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}
export const auth = firebase.auth();
export const store = firebase.firestore();
export default firebase;
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
