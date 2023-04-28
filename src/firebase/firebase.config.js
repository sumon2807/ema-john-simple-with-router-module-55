// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQFrw9C19sUzRwrq_gN-JcPlLb29HxcOM",
  authDomain: "ema-with-jhon-firebase-auth.firebaseapp.com",
  projectId: "ema-with-jhon-firebase-auth",
  storageBucket: "ema-with-jhon-firebase-auth.appspot.com",
  messagingSenderId: "905942542988",
  appId: "1:905942542988:web:fed5052c0add6c300f29a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;