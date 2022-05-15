// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5CXo_BVbx_T3kXBnJkBqSmUdn4JN-PbQ",
    authDomain: "plantapp-df5c6.firebaseapp.com",
    databaseURL: "https://plantapp-df5c6-default-rtdb.firebaseio.com",
    projectId: "plantapp-df5c6",
    storageBucket: "plantapp-df5c6.appspot.com",
    messagingSenderId: "1064218027533",
    appId: "1:1064218027533:web:0b54a0b2895950f9fe9744"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };
