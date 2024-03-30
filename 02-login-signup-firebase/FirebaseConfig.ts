import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4vAHNM_TrVuliP0Vb3fbkh2RQxZF68o",
  authDomain: "rnlogindemo-85c5d.firebaseapp.com",
  projectId: "rnlogindemo-85c5d",
  storageBucket: "rnlogindemo-85c5d.appspot.com",
  messagingSenderId: "777388823228",
  appId: "1:777388823228:web:925ddd015532fd4381f6b9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);