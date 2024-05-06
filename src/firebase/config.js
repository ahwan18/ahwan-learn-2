// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-YCG2ICSHwCElnJLqnZRZ-Qz9KY0BFjY",
    authDomain: "ahwan-learn-2.firebaseapp.com",
    projectId: "ahwan-learn-2",
    storageBucket: "ahwan-learn-2.appspot.com",
    messagingSenderId: "1085389160462",
    appId: "1:1085389160462:web:536ea812a09a750bcf3c5f",
    measurementId: "G-KKBQMB4F63"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;