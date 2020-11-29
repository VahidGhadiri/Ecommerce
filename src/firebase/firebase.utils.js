import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyD2ofFafmj5C8Sw9VRGC_eBXertmlzUJdY",
  authDomain: "ecommerce-whyd.firebaseapp.com",
  databaseURL: "https://ecommerce-whyd.firebaseio.com",
  projectId: "ecommerce-whyd",
  storageBucket: "ecommerce-whyd.appspot.com",
  messagingSenderId: "1068605804783",
  appId: "1:1068605804783:web:2201e11859358e2c0c8b1a",
  measurementId: "G-TEW99WSWE9"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase