import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB0L_iLPdd9CH3kvjyhvHWnXFzoIysIPs",
  authDomain: "tinder-clone-98d54.firebaseapp.com",
  databaseURL: "https://tinder-clone-98d54.firebaseio.com",
  projectId: "tinder-clone-98d54",
  storageBucket: "tinder-clone-98d54.appspot.com",
  messagingSenderId: "1076230748178",
  appId: "1:1076230748178:web:481bb59f8c1d4f0b6c40cb",
  measurementId: "G-VCRKETDM71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
