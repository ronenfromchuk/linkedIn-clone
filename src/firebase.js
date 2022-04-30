import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "*****************************************",
    authDomain: "*****************************************",
    projectId: "*****************************************",
    storageBucket: "*****************************************",
    messagingSenderId: "*****************************************",
    appId: "*****************************************",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
