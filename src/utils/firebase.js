// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbCRPVnT98TwSiDmt_d0pvQaKx8EOLt0U",
  authDomain: "netflixgpt-16c05.firebaseapp.com",
  projectId: "netflixgpt-16c05",
  storageBucket: "netflixgpt-16c05.firebasestorage.app",
  messagingSenderId: "470427506659",
  appId: "1:470427506659:web:51a68e71d690c5003cf2d6",
  measurementId: "G-YXV30W12P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()