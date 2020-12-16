
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmoEAh5npIxeZE1A91WtUx1R2YY6DNr64",
    authDomain: "csrpnavigator.firebaseapp.com",
    databaseURL: "https://csrpnavigator.firebaseio.com",
    projectId: "csrpnavigator",
    storageBucket: "csrpnavigator.appspot.com",
    messagingSenderId: "716885228300",
    appId: "1:716885228300:web:346a4554e3be9030552729",
    measurementId: "G-YRN54TG2WF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;