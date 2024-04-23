// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGvRSk49lbwk-FHaeWi5zuUuBHvbZYkQ",
  authDomain: "miniproject-c5824.firebaseapp.com",
  projectId: "miniproject-c5824",
  storageBucket: "miniproject-c5824.appspot.com",
  messagingSenderId: "284189257463",
  appId: "1:284189257463:web:e2dd3c8741529799c8adf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
