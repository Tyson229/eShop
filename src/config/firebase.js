// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzaLnl3i9x3uT8xTHaETzbE3yaTds1HhA",
  authDomain: "my-first-project-d984f.firebaseapp.com",
  projectId: "my-first-project-d984f",
  storageBucket: "my-first-project-d984f.appspot.com",
  messagingSenderId: "163286108941",
  appId: "1:163286108941:web:f32f42b80252155c40be44",
  measurementId: "G-XL5KC6RMTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;