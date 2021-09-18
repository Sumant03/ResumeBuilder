import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-JAn6V3uVG6cYrF-D7i6zued3pYMPXug",
  authDomain: "resume-2419a.firebaseapp.com",
  projectId: "resume-2419a",
  storageBucket: "resume-2419a.appspot.com",
  messagingSenderId: "122123146610",
  appId: "1:122123146610:web:3b24dff59fe0fedf3ab9eb",
  measurementId: "G-KVE4KBQ5MP"
};

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();