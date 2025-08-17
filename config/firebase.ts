// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAANe4nNuMb2DeyXvyTRWfi0YH0X20u00",
  authDomain: "expense-tracker-b120d.firebaseapp.com",
  projectId: "expense-tracker-b120d",
  storageBucket: "expense-tracker-b120d.firebasestorage.app",
  messagingSenderId: "380308377880",
  appId: "1:380308377880:web:59032c2225e4387e198e6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const firestore = getFirestore(app);
