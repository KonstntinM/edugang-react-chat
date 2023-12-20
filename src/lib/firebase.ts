// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVUqh8d26H4QPngExpoGSJjpItsdTKAG0",
  authDomain: "edugang-react-chat.firebaseapp.com",
  projectId: "edugang-react-chat",
  storageBucket: "edugang-react-chat.appspot.com",
  messagingSenderId: "383150876528",
  appId: "1:383150876528:web:1643a0ca91496b5e4e51b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app, "https://edugang-react-chat-default-rtdb.europe-west1.firebasedatabase.app");
