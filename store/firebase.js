// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKdLaGe5RXZAMd2WdWMj_nlJzIY3KlNeI",
  authDomain: "next-checkins.firebaseapp.com",
  projectId: "next-checkins",
  storageBucket: "next-checkins.appspot.com",
  messagingSenderId: "388763011140",
  appId: "1:388763011140:web:b3c372e68adb9062e8d411",
  measurementId: "G-786SLHEY3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

if (typeof window !== "undefined") {
  const analytics = getAnalytics();
  // Use analytics as needed
}
