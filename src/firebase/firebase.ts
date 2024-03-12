import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbC4PI7zUQsv8eVCWUAFQHtTTb5PdR2h0",
  authDomain: "online-chatbot-594e7.firebaseapp.com",
  projectId: "online-chatbot-594e7",
  storageBucket: "online-chatbot-594e7.appspot.com",
  messagingSenderId: "966578959273",
  appId: "1:966578959273:web:f3bcc444aa35c33f66cab8",
  measurementId: "G-JD4PJL9H4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
