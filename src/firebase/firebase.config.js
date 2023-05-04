// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk2tbui0wQcWaNyPYFEUWO1FM5YwaheEA",
  authDomain: "bengal-dining-min.firebaseapp.com",
  projectId: "bengal-dining-min",
  storageBucket: "bengal-dining-min.appspot.com",
  messagingSenderId: "237538666522",
  appId: "1:237538666522:web:f62b201c4a68b888e749a3",
  measurementId: "G-CQNPET7NXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;