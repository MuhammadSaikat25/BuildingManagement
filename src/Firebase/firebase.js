// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBniCnzDV5O4jv_EbeEslIpC6YMaj2lSA",
  authDomain: "building-management-744cc.firebaseapp.com",
  projectId: "building-management-744cc",
  storageBucket: "building-management-744cc.appspot.com",
  messagingSenderId: "741534513457",
  appId: "1:741534513457:web:e38237cdda436e9de3d810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app