import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }  from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBmSUGGjhn_aU-EWhknOR-Ra2OCbqYGpwI",
    authDomain: "impact-forge.firebaseapp.com",
    projectId: "impact-forge",
    storageBucket: "impact-forge.appspot.com",
    messagingSenderId: "796824184094",
    appId: "1:796824184094:web:29d9670d628b49a509d50f",
    measurementId: "G-SS085MYJ77"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
