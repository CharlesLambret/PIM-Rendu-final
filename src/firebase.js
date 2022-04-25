import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyCGXR0RPRMP5bqEQ-KQ6BYNwINNNScnxA0",

  authDomain: "projet-intensif-mobile.firebaseapp.com",

  databaseURL: "https://projet-intensif-mobile-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "projet-intensif-mobile",

  storageBucket: "projet-intensif-mobile.appspot.com",

  messagingSenderId: "381443059831",

  appId: "1:381443059831:web:2b10d5799dc3fcfd871672",

  measurementId: "G-M2GTCY6SFZ"

    
  
  };



const appfirebase = initializeApp(firebaseConfig);

// Inscription 
const auth = getAuth(appfirebase);


// Accéder aux données 
const db = getFirestore(appfirebase);
const storage = getStorage(appfirebase);

export { storage, appfirebase, firebaseConfig, auth, db};