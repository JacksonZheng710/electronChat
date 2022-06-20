import firebase from "firebase/app";
import 'firebase/firestore';

const config  = {
    apiKey: process.env.FIREBASR_API_KEY,
    authDomain: process.env.FIREBASR_AUTH_DOMIAON,
    projectId:process.env.FIREBASR_PROJECT_ID,
    storageBucket: process.env.FIREBASR_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASR_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASR_APP_ID,
    measurementId: process.env.FIREBASR_MEASUREMENT_ID,
  };
  
  // Initialize Firebase
export const { Timestamp } = firebase.firestore;
export default firebase.initializeApp(config).firestore();

