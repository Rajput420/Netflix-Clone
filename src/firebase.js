import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGEmM5fBP-IEBOLfMIxlKGGyrdC-FH5-s",
    authDomain: "netflix-react-e8df4.firebaseapp.com",
    projectId: "netflix-react-e8df4",
    storageBucket: "netflix-react-e8df4.appspot.com",
    messagingSenderId: "66417759020",
    appId: "1:66417759020:web:e060dfe6b9b1a5b3be9289",
    measurementId: "G-NMX3QKKCHC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth , provider };