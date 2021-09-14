// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyVVZWR27U2jjAnT--VMC_sALDo7U2fZo",
  authDomain: "netflix-clone-ff39e.firebaseapp.com",
  projectId: "netflix-clone-ff39e",
  storageBucket: "netflix-clone-ff39e.appspot.com",
  messagingSenderId: "205389302052",
  appId: "1:205389302052:web:8423b7bcee12d0fbc2cbb1",
  measurementId: "G-QH0QTM3VWZ",
};

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
