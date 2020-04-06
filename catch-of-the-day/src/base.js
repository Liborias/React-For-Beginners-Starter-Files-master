import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK4LYSaV47z1ArGjSDzxaS5AdOtizZi6w",
  authDomain: "zakors-fish-shop.firebaseapp.com",
  databaseURL: "https://zakors-fish-shop.firebaseio.com"
  //projectId: "zakors-fish-shop"
});
const base = Rebase.createClass(firebaseApp.database());
// This is named export
//export { firebaseApp };
//this is a default export
//const base = firebaseApp.database();
export { firebaseApp };
export default base;
