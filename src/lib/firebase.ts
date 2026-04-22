// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// `https://firebase.google.com/docs/web/setup#available-libraries`

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn840hVWphJwhntycmfzQV40DOK7o2nZY",
  authDomain: "nailedbymo-b40c4.firebaseapp.com",
  projectId: "nailedbymo-b40c4",
  storageBucket: "nailedbymo-b40c4.firebasestorage.app",
  messagingSenderId: "549479840302",
  appId: "1:549479840302:web:d5c733f694b966c7bdbdbf",
  measurementId: "G-KG4MYR6R7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
