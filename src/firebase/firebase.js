
import firebase from 'firebase/app';
import  'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyCE7gZM5XDWaiN0HM11bgTBracA2ptwJBQ",
    authDomain: "penny-pincher-cace8.firebaseapp.com",
    databaseURL: "https://penny-pincher-cace8.firebaseio.com",
    projectId: "penny-pincher-cace8",
    storageBucket: "penny-pincher-cace8.appspot.com",
    messagingSenderId: "641628698644"
};
const devConfig = {
    apiKey: "AIzaSyCE7gZM5XDWaiN0HM11bgTBracA2ptwJBQ",
    authDomain: "penny-pincher-cace8.firebaseapp.com",
    databaseURL: "https://penny-pincher-cace8.firebaseio.com",
    projectId: "penny-pincher-cace8",
    storageBucket: "penny-pincher-cace8.appspot.com",
    messagingSenderId: "641628698644"
};
const config = process.env.NODE_ENV === 'production'
? prodConfig : devConfig;
if(!firebase.apps.length) {
    firebase.initializeApp((config));
}

const auth = firebase.auth();
const db = firebase.firestore();


export {
    auth,
    db,
}