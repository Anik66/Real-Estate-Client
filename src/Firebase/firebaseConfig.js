
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyYjJ9Nje19nB91Y9TdWvN8_N94j4-e3A",
  authDomain: "real--estate-auth.firebaseapp.com",
  projectId: "real--estate-auth",
  storageBucket: "real--estate-auth.appspot.com",
  messagingSenderId: "855092286374",
  appId: "1:855092286374:web:a88c47312bf14e361af567"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth