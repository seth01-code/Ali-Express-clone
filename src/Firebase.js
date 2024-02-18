import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7KB4LnF81WVaxlQ4ImcYWFognGlXhpvE",
  authDomain: "aliexpress-clone-73a90.firebaseapp.com",
  projectId: "aliexpress-clone-73a90",
  storageBucket: "aliexpress-clone-73a90.appspot.com",
  messagingSenderId: "821123320768",
  appId: "1:821123320768:web:89a403f4aded9bbeed5625",
  measurementId: "G-YERZSZ9R66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage, analytics };

// const firebaseApp = firebase.inializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };

//1. import the dependencies
// import * as firebase from "firebase";

// //2. Initialize app with the config vars
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// });

// //3. export it for use
export default app;
