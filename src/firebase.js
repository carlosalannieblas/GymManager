import { initializeApp, getApp, getApps } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAmd4DMn-d41gFzlOyuvFcWgEMSuhYypwQ",
  authDomain: "musicfy-v2-3e6d4.firebaseapp.com",
  projectId: "musicfy-v2-3e6d4",
  storageBucket: "musicfy-v2-3e6d4.appspot.com",
  messagingSenderId: "36915732591",
  appId: "1:36915732591:web:837cfab7b4ebbee7dced9a"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
export const storage = getStorage();
