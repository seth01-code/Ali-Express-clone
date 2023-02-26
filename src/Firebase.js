import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB7KB4LnF81WVaxlQ4ImcYWFognGlXhpvE",
  authDomain: "aliexpress-clone-73a90.firebaseapp.com",
  databaseUrl: "https://aliexpress-clone-73a90.firebaseio.com",
  projectId: "aliexpress-clone-73a90",
  storageBucket: "aliexpress-clone-73a90.appspot.com",
  messagingSenderId: "821123320768",
  appId: "1:821123320768:web:89a403f4aded9bbeed5625",
  measurementId: "G-YERZSZ9R66",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };

// const firebaseApp = firebase.inializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };
