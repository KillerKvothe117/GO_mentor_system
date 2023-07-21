import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCP_uozT4cg1CHYDo46SlPzWvpsr6jfQGk",
  authDomain: "gouni-mentor.firebaseapp.com",
  projectId: "gouni-mentor",
  storageBucket: "gouni-mentor.appspot.com",
  messagingSenderId: "598820891729",
  appId: "1:598820891729:web:4616a6780b54132a555c70",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
