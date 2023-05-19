// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5658RrrJCGfS65RihWu1JGlhps_LK8aY",
  authDomain: "toy-marketplace-aa99d.firebaseapp.com",
  projectId: "toy-marketplace-aa99d",
  storageBucket: "toy-marketplace-aa99d.appspot.com",
  messagingSenderId: "351903970969",
  appId: "1:351903970969:web:7318c5af410339b7fdaa08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;