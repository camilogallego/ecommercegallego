import firebase from 'firebase/app';

import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDBEUDOLs4SSyMwESJ2mNI9klQdli9ROlE",
    authDomain: "e-commercegallego.firebaseapp.com",
    projectId: "e-commercegallego",
    storageBucket: "e-commercegallego.appspot.com",
    messagingSenderId: "760065017855",
    appId: "1:760065017855:web:d16e7c944e7293dfb0c9ca"
};

const fb = firebase.initializeApp(firebaseConfig);

// Y ahora utilizamos su método llamado firestore, lo ejecutamos y lo guardamos
// dentro de una constante llamada db. También debemos exportar
export const db = fb.firestore();