// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtnPGCmS37XR-s2wFSsOWWvQty3ctTSj4",
  authDomain: "noted-gizmo-389415.firebaseapp.com",
  projectId: "noted-gizmo-389415",
  storageBucket: "noted-gizmo-389415.appspot.com",
  messagingSenderId: "568553805407",
  appId: "1:568553805407:web:b5043c8244540adef52dea",
  measurementId: "G-FWG86W06KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore (app);

