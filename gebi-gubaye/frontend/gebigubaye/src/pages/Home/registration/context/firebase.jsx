import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2q1ZFtTCKbxw0iIP1Eb8EEk1N7I1cOo0",
  authDomain: "signup-page-eb337.firebaseapp.com",
  projectId: "signup-page-eb337",
  storageBucket: "signup-page-eb337.firebasestorage.app",
  messagingSenderId: "75041460671",
  appId: "1:75041460671:web:e43378641a38bc13bc110a"
};


const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
