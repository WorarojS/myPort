import firebase from "firebase"

export const firebaseConfig = {
  apiKey: "AIzaSyCEBJoCNDEFMcbXbyXE1ZqzHa9qQf8IN9A",
  authDomain: "myportv2-8ca5c.firebaseapp.com",
  databaseURL: "https://myportv2-8ca5c.firebaseio.com",
  projectId: "myportv2-8ca5c",
  storageBucket: "",
  messagingSenderId: "1031608110423",
  appId: "1:1031608110423:web:4ff3041fa4e20123"
}

const Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase
