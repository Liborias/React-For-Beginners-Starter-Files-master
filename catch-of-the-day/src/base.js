import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhV9CN0i1CW1Ga96LHIaLdEN72BMVcPYw",
  authDomain: "fish-shop-5641f.firebaseapp.com",
  databaseURL: "https://fish-shop-5641f.firebaseio.com",
  projectId: "fish-shop-5641f",
  storageBucket: "fish-shop-5641f.appspot.com",
  messagingSenderId: "1066388093745",
  appId: "1:1066388093745:web:93805ef7706b040310ce10",
});
//const base = Rebase.createClass(firebaseApp.database());
// This is named export
//export { firebaseApp };
//this is a default export
const base = firebaseApp.firestore();
export { firebaseApp };
export default base;
