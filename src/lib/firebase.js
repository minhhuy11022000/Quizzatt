import firebase from "firebase";
import "firebase/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmgmBNis9nV0t41gYwcPQt46KmiKRumhI",
  authDomain: "quizzatt-f581e.firebaseapp.com",
  projectId: "quizzatt-f581e",
  storageBucket: "quizzatt-f581e.appspot.com",
  messagingSenderId: "233286078661",
  appId: "1:233286078661:web:8fd7b91d860890eb16a0ac",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
