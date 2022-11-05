import { initializeApp } from "firebase/app";
import {getAUth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXGQyrOPuIEZ54ISTkC7uN5345IHS22hw",
  authDomain: "react-auth-26754.firebaseapp.com",
  projectId: "react-auth-26754",
  storageBucket: "react-auth-26754.appspot.com",
  messagingSenderId: "1026245770675",
  appId: "1:1026245770675:web:33177bc455aabf0d1c1fc6",
  measurementId: "G-5KDKJ5NBSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default App;