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
    await getMessaging().sendEachForMulticast(message);
  } catch (err) {
    throw new CustomError({
      message: err.message,
      statusCode: 500,
    });
  }
};
