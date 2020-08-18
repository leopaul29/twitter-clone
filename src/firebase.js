import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADRFyaefR1rIITINlSfAVy5-eYEOJCGq0",
    authDomain: "twitter-clone-4fb96.firebaseapp.com",
    databaseURL: "https://twitter-clone-4fb96.firebaseio.com",
    projectId: "twitter-clone-4fb96",
    storageBucket: "twitter-clone-4fb96.appspot.com",
    messagingSenderId: "782692401247",
    appId: "1:782692401247:web:834ef8c4dca5d1138a1bea",
    measurementId: "G-K45P3SV4M7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;