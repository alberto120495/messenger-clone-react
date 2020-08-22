import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA0O-zt7UKVjcuvs4jhZ5vApyyVB3lfoFQ",
  authDomain: "messenger-clone-aad32.firebaseapp.com",
  databaseURL: "https://messenger-clone-aad32.firebaseio.com",
  projectId: "messenger-clone-aad32",
  storageBucket: "messenger-clone-aad32.appspot.com",
  messagingSenderId: "26021222677",
  appId: "1:26021222677:web:87f22a7f6596334269711c",
  measurementId: "G-2BVK55FJL6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
