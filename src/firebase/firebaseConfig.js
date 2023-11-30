
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAL-oTh6bKGhIe-kEyWTeMuJGNfIOSXRoI",
  authDomain: "tiendaonlinecubana.firebaseapp.com",
  projectId: "tiendaonlinecubana",
  storageBucket: "tiendaonlinecubana.appspot.com",
  messagingSenderId: "813727744299",
  appId: "1:813727744299:web:ae5039c48e311b7c16856e"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db =getFirestore(app)
export const storage=getStorage(app)