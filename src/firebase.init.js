// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIeR4HGPU30pu2S0B_rPrE10YTO88A_b0",
  authDomain: "manufacturer-website-87c0c.firebaseapp.com",
  projectId: "manufacturer-website-87c0c",
  storageBucket: "manufacturer-website-87c0c.appspot.com",
  messagingSenderId: "14359195869",
  appId: "1:14359195869:web:34dad318bf90a1ba4deb34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;