import firebase from "firebase/app ";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAT-8Jtt6W2g94U9zDiOsS1wvNkcplcAYY",
  authDomain: "open-writing.firebaseapp.com",
  databaseURL: "https://open-writing.firebaseio.com",
  projectId: "open-writing",
  storageBucket: "open-writing.appspot.com",
  messagingSenderId: "572947146182",
  appId: "1:572947146182:web:f9187fe1ce65f1f5"
});

export const db = firebase.firestore();
export const auth = firebase.auth();
