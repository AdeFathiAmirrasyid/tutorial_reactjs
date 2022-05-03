// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeyz5C8A2iYk2rmNPonsc6BoVVkEFLA44",
  authDomain: "simple-notes-firebase-78f9a.firebaseapp.com",
  projectId: "simple-notes-firebase-78f9a",
  storageBucket: "simple-notes-firebase-78f9a.appspot.com",
  messagingSenderId: "8135927430",
  appId: "1:8135927430:web:0913bda8ff798494879307",
  measurementId: "G-ML8BTX8HFE",
  databaseURL: "https://simple-notes-firebase-78f9a-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
export const database = getDatabase(app);
export default analytics;
