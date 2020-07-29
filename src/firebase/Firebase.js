import firebase from 'firebase';
const firebaseConfig=firebase.initializeApp({
    apiKey: "AIzaSyAOuPssPHRHYOaHWsnyQt0eJJ2KOmIhs5E",
    authDomain: "clone-app-3ff66.firebaseapp.com",
    databaseURL: "https://clone-app-3ff66.firebaseio.com",
    projectId: "clone-app-3ff66",
    storageBucket: "clone-app-3ff66.appspot.com",
    messagingSenderId: "693676819423",
    appId: "1:693676819423:web:d70d78235c1bbe88c8fa6a",
    measurementId: "G-SYZMWTX105"
});

export const db=firebaseConfig.firestore();
export const auth=firebase.auth();

