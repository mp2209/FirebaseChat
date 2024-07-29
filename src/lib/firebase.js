// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-8953e.firebaseapp.com",
//   projectId: "reactchat-8953e",
//   storageBucket: "reactchat-8953e.appspot.com",
//   messagingSenderId: "989490756392",
//   appId: "1:989490756392:web:9e54e92c7b39c531b82e1d"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()

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
  measurementId: "G-CFV4C8L10K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();