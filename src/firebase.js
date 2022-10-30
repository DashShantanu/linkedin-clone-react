import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFihkX3wwtC68eWBQ3026KSzFuItRXDOo",
    authDomain: "linkedin-clone-react-289d2.firebaseapp.com",
    projectId: "linkedin-clone-react-289d2",
    storageBucket: "linkedin-clone-react-289d2.appspot.com",
    messagingSenderId: "837311453032",
    appId: "1:837311453032:web:89646d19b2f92aa0a0e8dd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };