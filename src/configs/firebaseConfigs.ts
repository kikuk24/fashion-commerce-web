import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqsq6tHm83GuppyAUahjWU6rn-gYy9PGU",
    authDomain: "restyled-97a38.firebaseapp.com",
    projectId: "restyled-97a38",
    storageBucket: "restyled-97a38.firebasestorage.app",
    messagingSenderId: "583691493783",
    appId: "1:583691493783:web:d9186bea16d8e26e9e24d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { app, auth, googleProvider, db };
