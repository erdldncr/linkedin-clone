import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBo_k11KllbxHSd8HaOchkiEaJ6hGJ7rFY",
  authDomain: "linkedin-clone-c6281.firebaseapp.com",
  projectId: "linkedin-clone-c6281",
  storageBucket: "linkedin-clone-c6281.appspot.com",
  messagingSenderId: "122439051731",
  appId: "1:122439051731:web:55b0d4eb6bbef47206e726",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
