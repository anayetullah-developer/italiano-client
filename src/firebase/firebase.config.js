// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG7VVuQIEWXuyG9fV_IeOwqGgnuvcj6ig",
  authDomain: "italiano-deligioso.firebaseapp.com",
  projectId: "italiano-deligioso",
  storageBucket: "italiano-deligioso.appspot.com",
  messagingSenderId: "116998059919",
  appId: "1:116998059919:web:7fd8711f51b700a638fdfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;