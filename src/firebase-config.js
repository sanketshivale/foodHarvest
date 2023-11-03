// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyA2aItJnLX95AG9XDNh0oGnKiWmM1_3UNM",
  authDomain: "food-harvest-1f40b.firebaseapp.com",
  projectId: "food-harvest-1f40b",
  storageBucket: "food-harvest-1f40b.appspot.com",
  messagingSenderId: "161675900048",
  appId: "1:161675900048:web:c3d8752f461973710f9415",
  measurementId: "G-DTVSWETV4X"
};

const app = firebase.initializeApp(firebaseConfig);
export default app 