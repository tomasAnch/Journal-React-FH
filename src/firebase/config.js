// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRiVF8lD05kvyerJibs_OmvnZKvs6e7U8",
  authDomain: "curso-react-fh-59409.firebaseapp.com",
  projectId: "curso-react-fh-59409",
  storageBucket: "curso-react-fh-59409.appspot.com",
  messagingSenderId: "628654746968",
  appId: "1:628654746968:web:e383527c1b10713166892d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )