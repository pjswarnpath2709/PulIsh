import { getMessaging } from "firebase-admin/messaging";
import CustomError from "./CustomError.js";

export const sendNotifications = async ({ device_tokens, title, text }) => {
  if (device_tokens.length == 0) return;
  const message = {
    notification: {
      title: title,
      body: text,
    },
    data: {
      frontend_url: `${process.env.FRONTEND_URL}`,
    },
    webpush: {
      fcmOptions: {
        link: `${process.env.FRONTEND_URL}`,
      },
    },
    tokens: device_tokens,
  };
  console.log(
    "\x1b[35m",
    `[${new Date(Date.now()).toLocaleString()}]`,
    "👉👉👉 message :",
    message
  );
  try {
    const ans = await getMessaging().sendEachForMulticast(message);
    ans.responses.map((response) => {
      console.log(response);
    });
  } catch (err) {
    throw new CustomError({
      message: err.message,
      statusCode: 500,
    });
  }
};
