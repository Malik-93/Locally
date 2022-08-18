import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAnalytics } from "firebase/analytics";

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const firebaseConfig = {
    apiKey: "AIzaSyBxxpBIKC17Z3Yfb3v1vwD-CItytYG-FC8",
    authDomain: "locally-c0c85.firebaseapp.com",
    projectId: "locally-c0c85",
    storageBucket: "locally-c0c85.appspot.com",
    messagingSenderId: "57687982230",
    appId: "1:57687982230:web:12775d8c91a57130e982b7",
    measurementId: "G-MERP7EHEP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, GoogleAuthProvider, FacebookAuthProvider, storage };