
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz4-YCU-fQxJnOs17AyWtyna1uSFi_XnE",
  authDomain: "fir-project-eea54.firebaseapp.com",
  projectId: "fir-project-eea54",
  storageBucket: "fir-project-eea54.firebasestorage.app",
  messagingSenderId: "164412843641",
  appId: "1:164412843641:web:4352b77e4ecdb3b9bc96a8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database storage
export const db = getFirestore(app);