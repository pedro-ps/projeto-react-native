import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp= initializeApp({
    apiKey: "AIzaSyBuxsScQJ7xuHDzvYbZcrVzl5bh362Hz5E",
    authDomain: "cadsacc-a46f9.firebaseapp.com",
    projectId: "cadsacc-a46f9",
    storageBucket: "cadsacc-a46f9.appspot.com",
    messagingSenderId: "937145730749",
    appId: "1:937145730749:web:6639dc5b36fd89d06459d4"
});

if(firebase.app.length === 0){
    Firebase = firebase.initializeApp(firebaseApp);
}

export default Firebase;
