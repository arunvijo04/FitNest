import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQz_YvX5PTIMiLmfi7Np3HYJYAB-k2rg8",
  authDomain: "videovault-491e4.firebaseapp.com",
  projectId: "videovault-491e4",
  storageBucket: "videovault-491e4.firebasestorage.app",
  messagingSenderId: "351269351075",
  appId: "1:351269351075:web:9a5bf7977c0e26f494d916"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
