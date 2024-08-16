import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzxDcyg_G8UkEUwY5DjmpiR0MmboM3yM0",
  authDomain: "tesst2-26683.firebaseapp.com",
  projectId: "tesst2-26683",
  storageBucket: "tesst2-26683.appspot.com",
  messagingSenderId: "714110152662",
  appId: "1:714110152662:web:2d00038d63aab2eb5cfe77",
  measurementId: "G-CFV4C8L10K",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
