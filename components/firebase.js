// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt56rUgXAWDcAOEFwUmO5WXI_Je6GE4ik",
  authDomain: "fyp-sensor-readings.firebaseapp.com",
  databaseURL: "https://fyp-sensor-readings-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "fyp-sensor-readings",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

signInAnonymously(auth).catch((error) => {
  console.error("Anonymous authentication failed:", error);
});

export { db, ref, onValue };
