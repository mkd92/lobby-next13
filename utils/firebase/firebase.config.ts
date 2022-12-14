import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng",
  authDomain: "lobby-c8f1f.firebaseapp.com",
  databaseURL: "https://lobby-c8f1f.firebaseio.com",
  projectId: "lobby-c8f1f",
  storageBucket: "lobby-c8f1f.appspot.com",
  messagingSenderId: "91079693744",
  appId: "1:91079693744:web:7e3ccb27356d7e87",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const firebaseInit = () => {
  return app;
};
