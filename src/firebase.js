// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBWPLPLC-foQfNJFHipiduthCOC_lKM5l4",
  authDomain: "clone-4a449.firebaseapp.com",
  projectId: "clone-4a449",
  storageBucket: "clone-4a449.appspot.com",
  messagingSenderId: "159159983490",
  appId: "1:159159983490:web:005b2989bf91e2abcfc39b",
  measurementId: "G-2VWMHQGQMT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };