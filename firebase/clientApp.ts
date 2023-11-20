// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1Wq51bqeXruuip62OFCRA0-0gVd8XAMw",
    authDomain: "binaryfictionweb.firebaseapp.com",
    projectId: "binaryfictionweb",
    storageBucket: "binaryfictionweb.appspot.com",
    messagingSenderId: "1001004571218",
    appId: "1:1001004571218:web:136721859d1eaa385e1d8b",
    measurementId: "G-EBBLMPF4V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default initializeApp;