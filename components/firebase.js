// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt56rUgXAWDcAOEFwUmO5WXI_Je6GE4ik",
  authDomain: "fyp-sensor-readings.firebaseapp.com",
  databaseURL: "https://fyp-sensor-readings-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fyp-sensor-readings",  
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue };
