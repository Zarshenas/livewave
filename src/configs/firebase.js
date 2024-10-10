// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXKEY8uQJKRwkU5TWRuRgWNf36QmjLf1I",
  authDomain: "livewave-43cf1.firebaseapp.com",
  databaseURL: "https://livewave-43cf1-default-rtdb.firebaseio.com",
  projectId: "livewave-43cf1",
  storageBucket: "livewave-43cf1.appspot.com",
  messagingSenderId: "126621465536",
  appId: "1:126621465536:web:25ac1916741f25d7c1e625",
  measurementId: "G-J6KTGLW8F4"
};

// Initialize Firebase
const appConfig = initializeApp(firebaseConfig);
const analytics = getAnalytics(appConfig);
export { appConfig , analytics};