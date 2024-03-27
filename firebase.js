// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMemXSWYAiJbWP9DkGM4BJgNXXRkuTKk",
  authDomain: "test-c6376.firebaseapp.com",
  databaseURL: "https://test-c6376-default-rtdb.firebaseio.com",
  projectId: "test-c6376",
  storageBucket: "test-c6376.appspot.com",
  messagingSenderId: "173176511421",
  appId: "1:173176511421:web:9116191a5afac9c243d0d4",
  measurementId: "G-Z6Q0NRM3MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
