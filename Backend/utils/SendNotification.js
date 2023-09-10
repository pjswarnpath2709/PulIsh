import { getMessaging } from "firebase-admin/messaging";
import CustomError from "./CustomError.js";

export const sendNotifications = async ({ device_tokens, title, text }) => {
  if (device_tokens.length == 0) return;
  const message = {
    notification: {
      title: title,
      body: text,
    },
    tokens: device_tokens,
  };
  try {
    const ans = await getMessaging().sendEachForMulticast(message);
    console.log(
      "\x1b[35m",
      `[${new Date(Date.now()).toLocaleString()}]`,
      "👉👉👉 ans :",
      ans
    );
  } catch (err) {
    throw new CustomError({
      message: err.message,
      statusCode: 500,
    });
  }
};
