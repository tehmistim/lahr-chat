import firebase from './firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyBEGeA2B_KWUnpPR8A2s1FIuUXNl0eZu0U",
    authDomain: "lahr-app.firebaseapp.com",
    projectId: "lahr-app",
    storageBucket: "lahr-app.appspot.com",
    messagingSenderId: "879588874226",
    appId: "1:879588874226:web:8fc9d4f8b7aa1ac373bd6b",
    measurementId: "G-4CX6FK74RM"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;