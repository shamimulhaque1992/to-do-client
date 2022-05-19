// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzAkNiQWMi109K822qKCqBSOU_bXRSUH4",
  authDomain: "todo-app-9bcc2.firebaseapp.com",
  projectId: "todo-app-9bcc2",
  storageBucket: "todo-app-9bcc2.appspot.com",
  messagingSenderId: "284376585513",
  appId: "1:284376585513:web:0029a0ed8c4a1b3f641338",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
