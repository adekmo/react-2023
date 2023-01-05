
// import { auth } from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1934LhRHNWT2iZiQChH-Xi_gY9FnreIE",
    authDomain: "aniflix-8cd5a.firebaseapp.com",
    projectId: "aniflix-8cd5a",
    storageBucket: "aniflix-8cd5a.appspot.com",
    messagingSenderId: "393880108091",
    appId: "1:393880108091:web:ca832b3bcbecbc1e25f01e"
};

// 1
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { auth };
export default db;