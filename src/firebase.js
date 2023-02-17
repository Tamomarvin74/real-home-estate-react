// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86dOJM62PLYucMMzlTZP8dLsG1rvIwzQ",
  authDomain: "real-homes-react.firebaseapp.com",
  projectId: "real-homes-react",
  storageBucket: "real-homes-react.appspot.com",
  messagingSenderId: "87779459896",
  appId: "1:87779459896:web:abe90e45b46167f153f7cd"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()