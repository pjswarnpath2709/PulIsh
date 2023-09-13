/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCvPlAdwxyuYfHp3cKAPS2Y1Nlx9CYhD_Y",
  authDomain: "pulish-2709.firebaseapp.com",
  projectId: "pulish-2709",
  storageBucket: "pulish-2709.appspot.com",
  messagingSenderId: "189435546689",
  appId: "1:189435546689:web:b929d8397d15d0ca6e0ac0",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


// messaging.setBackgroundMessageHandler(async (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );

//   const notificationTitle = payload.data.title;
//   const notificationOptions = {
//     body: payload.data.body,
//     icon: "/firebase-logo.png",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });

self.addEventListener("notificationclick", (event) => {
  console.log(event);
  return event;
});
