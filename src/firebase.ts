import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey as string,
  authDomain: process.env.REACT_APP_authDomain as string,
  projectId: process.env.REACT_APP_projectId as string,
  storageBucket: process.env.REACT_APP_storageBucket as string,
  messagingSenderId:process.env.REACT_APP_messagingSenderId as string,
  appId:process.env.REACT_APP_appId as string,
  measurementId:process.env.REACT_APP_measurementId as string,
  databaseUrl:process.env.REACT_APP_databaseUrl as string,
};

// Initialize Firebase
console.log(process.env.REACT_APP_apiKey);

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);