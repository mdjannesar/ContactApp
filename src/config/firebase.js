// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTy1K6X-9SYnCNUAzPhku6Mwq4-wuhIZs",
  authDomain: "vite-contact-1f196.firebaseapp.com",
  projectId: "vite-contact-1f196",
  storageBucket: "vite-contact-1f196.appspot.com",
  messagingSenderId: "939052715486",
  appId: "1:939052715486:web:8d1c6cda7977265d1c614f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);