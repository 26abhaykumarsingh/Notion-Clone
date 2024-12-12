import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApX3tPzaHl_8rCxdYKHgeNPODfGhyLN64",
    authDomain: "notion-clone-40630.firebaseapp.com",
    projectId: "notion-clone-40630",
    storageBucket: "notion-clone-40630.firebasestorage.app",
    messagingSenderId: "944775985077",
    appId: "1:944775985077:web:40c1494cef8b4256c60bfc"
  };
  
  // Initialize Firebase
  const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };