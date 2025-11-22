import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGSeINzprPiKA6mjusF17fLZbEhARHews",
  authDomain: "reactnative14-4be45.firebaseapp.com",
  projectId: "reactnative14-4be45",
  storageBucket: "reactnative14-4be45.firebasestorage.app",
  messagingSenderId: "417586657450",
  appId: "1:417586657450:web:5eb87a27b0c3a46303b8d3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};