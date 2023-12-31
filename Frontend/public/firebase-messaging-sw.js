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

messaging.onBackgroundMessage(async (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    data: payload.data,
  };
  await self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close(); // Close the notification
  event.waitUntil(clients.openWindow(event.notification.data.frontend_url));
});
