import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzxt025q1HD1ypkJLuYtDDeTZinyY5PUs",
  authDomain: "my-recipes-5be3b.firebaseapp.com",
  projectId: "my-recipes-5be3b",
  storageBucket: "my-recipes-5be3b.appspot.com",
  messagingSenderId: "273867424641",
  appId: "1:273867424641:web:8d1ae6dbe279323d569e80",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };