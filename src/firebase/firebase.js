import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAAEOdhWPrAbSmWLaZVGMy85vH-4cCOlI4",
    authDomain: "chat-e8e55.firebaseapp.com",
    databaseURL: "https://chat-e8e55.firebaseio.com",
    projectId: "chat-e8e55",
    storageBucket: "chat-e8e55.appspot.com",
    messagingSenderId: "932366584374"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };