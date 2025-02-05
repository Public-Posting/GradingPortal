import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrTIW13e8W6mctseaZND_mPK5EYEIjuyI",
  authDomain: "grading-portal-14831.firebaseapp.com",
  projectId: "grading-portal-14831",
  storageBucket: "grading-portal-14831.firebasestorage.app",
  messagingSenderId: "14983672374",
  appId: "1:14983672374:web:de48ba130c88e130e75e97",
  measurementId: "G-Z5ZZSDKD2Z"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
