import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';


const firebaseConfig = {
  apiKey: "AIzaSyAV5PXDOmRvz4jc2WLfD2bYDnvrXECRLxs",
  authDomain: "students-data-7ba66.firebaseapp.com",
  projectId: "students-data-7ba66",
  storageBucket: "students-data-7ba66.appspot.com",
  messagingSenderId: "509456429329",
  appId: "1:509456429329:web:9f9aa5bd0b8900866e9cb0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db, collection, addDoc, getDocs };