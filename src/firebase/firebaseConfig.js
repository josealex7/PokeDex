import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBupKn69qq92nae1i_fl5mPsx3As4mHSTI",
    authDomain: "pokedex-56837.firebaseapp.com",
    projectId: "pokedex-56837",
    storageBucket: "pokedex-56837.appspot.com",
    messagingSenderId: "395345034010",
    appId: "1:395345034010:web:eb5a6e5563035e63184aa3"
  };
  
  const app = initializeApp(firebaseConfig);
  const google  = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  
  export {
      app,
      google,
      facebook,
      
  }