// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6OkWPpFoxZ0YPF8XqA4u2NDkAglykNo",
  authDomain: "ema-jonh-with-firebase-auth.firebaseapp.com",
  projectId: "ema-jonh-with-firebase-auth",
  storageBucket: "ema-jonh-with-firebase-auth.appspot.com",
  messagingSenderId: "359056651552",
  appId: "1:359056651552:web:0de1b5bd30da1d3a495345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;