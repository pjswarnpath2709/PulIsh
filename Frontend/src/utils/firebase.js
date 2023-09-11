// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPlAdwxyuYfHp3cKAPS2Y1Nlx9CYhD_Y",
  authDomain: "pulish-2709.firebaseapp.com",
  projectId: "pulish-2709",
  storageBucket: "pulish-2709.appspot.com",
  messagingSenderId: "189435546689",
  appId: "1:189435546689:web:b929d8397d15d0ca6e0ac0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseMessaging = getMessaging(firebaseApp);

export const onMessageListener  = async () => {
  new Promise((resolve) => {
    onMessage(firebaseMessaging, (payload) => {
      resolve(payload);
    });
  });
};
