// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEWyfC2uGFNin1w5x6SMKjq8O385rZIY",
  authDomain: "fir-auth-4412f.firebaseapp.com",
  projectId: "fir-auth-4412f",
  storageBucket: "fir-auth-4412f.appspot.com",
  messagingSenderId: "179567262189",
  appId: "1:179567262189:web:98657fc79b12b23d014fe4",
};

// Initialize Firebase
let app;
if (firebase.apps.lenght === undefined) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
