import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5V66BEVL55O98uJVW2crV17R4cTQxd8c",
    authDomain: "linkedin-clone-7adf3.firebaseapp.com",
    projectId: "linkedin-clone-7adf3",
    storageBucket: "linkedin-clone-7adf3.appspot.com",
    messagingSenderId: "836256101657",
    appId: "1:836256101657:web:10a29beed16988e1b40188"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };