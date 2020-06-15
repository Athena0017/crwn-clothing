import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCp97Mhs0JKsgia5u0Yikf8-udsz7HWQ-s",
    authDomain: "crwn-db-fb4a8.firebaseapp.com",
    databaseURL: "https://crwn-db-fb4a8.firebaseio.com",
    projectId: "crwn-db-fb4a8",
    storageBucket: "crwn-db-fb4a8.appspot.com",
    messagingSenderId: "849168160524",
    appId: "1:849168160524:web:3341de8702d586f121db29",
    measurementId: "G-0B8F5GNMS7"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;