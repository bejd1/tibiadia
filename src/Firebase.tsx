import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCiD0HzW9jurU5ZJ6fo9knAfB6XcV1Dw14",
  authDomain: "tibiadia.firebaseapp.com",
  databaseURL:
    "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tibiadia",
  storageBucket: "tibiadia.appspot.com",
  messagingSenderId: "338897838571",
  appId: "1:338897838571:web:bf01e4b3d8d87ff81eb9ae",
  measurementId: "G-XZV1E34T7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getStorage(app);
