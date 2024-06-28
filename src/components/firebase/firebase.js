// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRQLJ85R7RM_LtA0izNzCtEcxJEAcVsUc",
  authDomain: "edsuma-aa055.firebaseapp.com",
  projectId: "edsuma-aa055",
  storageBucket: "edsuma-aa055.appspot.com",
  messagingSenderId: "684503484313",
  appId: "1:684503484313:web:439fd3c03a1be1aaadb508",
  measurementId: "G-M36L1SX2ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };