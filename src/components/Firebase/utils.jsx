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

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com',
  'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

