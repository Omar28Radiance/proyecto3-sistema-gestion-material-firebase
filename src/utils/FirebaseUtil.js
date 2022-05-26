import { initilizeApp } from 'firebase/app';

export function firebaseConfig() {
    initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvj1GDqA5tRR3shTyQHVDnIrG8jDZ43Zw",
  authDomain: "sistema-ad1a5.firebaseapp.com",
  projectId: "sistema-ad1a5",
  storageBucket: "sistema-ad1a5.appspot.com",
  messagingSenderId: "331169786455",
  appId: "1:331169786455:web:4ce10d38f81c935cb9d112",
  measurementId: "G-B5PFFKH9HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);