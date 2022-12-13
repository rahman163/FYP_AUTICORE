// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMtzV896zG6vMI1WJBSLeBrH6HBTt4FYc",
  authDomain: "auticoreapp2.firebaseapp.com",
  projectId: "auticoreapp2",
  storageBucket: "auticoreapp2.appspot.com",
  messagingSenderId: "1073090210147",
  appId: "1:1073090210147:web:2ba45f3fe261881f8e4b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);