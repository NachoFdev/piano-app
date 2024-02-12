import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCqlnpUGNDMobx4hPRaucra5W0H4X8Tq5k",
  authDomain: "piano-app-3ef9d.firebaseapp.com",
  projectId: "piano-app-3ef9d",
  storageBucket: "piano-app-3ef9d.appspot.com",
  messagingSenderId: "310476292899",
  appId: "1:310476292899:web:62406e1d8b24be2ee64296"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );