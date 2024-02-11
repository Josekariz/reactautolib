// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdnLF0pte8_KsWO_mDAdBfaP6W81M_uYw",
  authDomain: "autolib-605ff.firebaseapp.com",
  projectId: "autolib-605ff",
  storageBucket: "autolib-605ff.appspot.com",
  messagingSenderId: "685597849",
  appId: "1:685597849:web:3e7155f81fadc51618c408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)