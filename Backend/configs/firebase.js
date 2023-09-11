import fs from "fs/promises";
import path from "path";
import admin from "firebase-admin";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readAndInitializeFirebase = async () => {
  try {
    const relativePath = "pulish-2709-firebase-adminsdk-ornu8-dd6c3c92de.json";
    const filePath = path.resolve(__dirname, relativePath);
    const data = await fs.readFile(filePath, "utf8");
    const serviceAccount = JSON.parse(data);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    // Rest of your code
  } catch (error) {
    console.error("Error:", error);
  }
};