// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGczbrzB39LXKphFrhIsKioCH_1cdjKoI",
  authDomain: "learning-9f99e.firebaseapp.com",
  projectId: "learning-9f99e",
  storageBucket: "learning-9f99e.appspot.com",
  messagingSenderId: "769339759292",
  appId: "1:769339759292:web:a3774f767b8e952ea9ceb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
