import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subscribeToNotifications } from "../../redux/actions/othersActions";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCvPlAdwxyuYfHp3cKAPS2Y1Nlx9CYhD_Y",
  authDomain: "pulish-2709.firebaseapp.com",
  projectId: "pulish-2709",
  storageBucket: "pulish-2709.appspot.com",
  messagingSenderId: "189435546689",
  appId: "1:189435546689:web:b929d8397d15d0ca6e0ac0",
};

const Messaging = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeFirebaseApp = async () => {
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey:
              "BPY3afllXCzKhE-L4pYjW9VX5kTOAfyGrDzgauSEpAYMulSJDtMlZAr5wCMT-iN3wKmOZxNDIijJCaET9LP7iPY",
          });
          console.log("Firebase token:", token);
          dispatch(subscribeToNotifications({ device_token: token }));
        } else {
          console.error("Permission denied for notifications.");
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }

      onMessage(messaging, (payload) => {
        console.log("Message received in foreground:", payload);
        // You can dispatch an action or handle the incoming message as needed.
      });
    };

    initializeFirebaseApp();
  }, [dispatch]);

  return <></>;
};

export default Messaging;
