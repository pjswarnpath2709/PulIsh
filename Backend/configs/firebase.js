import fs from "fs/promises";
import path from "path";
import admin from "firebase-admin";
const dirname = new URL(".", import.meta.url).pathname;
export const readAndInitializeFirebase = async () => {
  try {
    const relativePath = "pulish-2709-firebase-adminsdk-ornu8-dd6c3c92de.json";
    const filePath = path.resolve(dirname, relativePath);
    const data = await fs.readFile(filePath, "utf8");
    const serviceAccount = JSON.parse(data);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};
