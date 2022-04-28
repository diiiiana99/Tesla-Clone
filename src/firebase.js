// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkWEkhR8ZrJQiXmuIovl2uAplDKFofLPI",
    authDomain: "tesla-clone-150e3.firebaseapp.com",
    projectId: "tesla-clone-150e3",
    storageBucket: "tesla-clone-150e3.appspot.com",
    messagingSenderId: "1096862827647",
    appId: "1:1096862827647:web:ebe45ae69592cf87ee2b4a",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }