import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB1ubgOSmFvEJNTl2MEy90c9vs_96-Vsfo",
  authDomain: "willy-1b4e5.firebaseapp.com",
  projectId: "willy-1b4e5",
  storageBucket: "willy-1b4e5.appspot.com",
  messagingSenderId: "110252632416",
  appId: "1:110252632416:web:71d367e93902daf17dd605"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig
