import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "instagram-978e9",
  storageBucket: "instagram-978e9.appspot.com",
  messagingSenderId: "134699409958",
  appId: "1:134699409958:web:c7553cbdb582fd5680fce7",
  measurementId: "G-8EBYE80WZX"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


