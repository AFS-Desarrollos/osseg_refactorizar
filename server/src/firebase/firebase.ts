import admin from "firebase-admin";
import dotenv from "dotenv";
import * as path from "path";
import { pathToFileURL } from "url";

dotenv.config();

const serviceAccountPath = pathToFileURL(
  path.resolve(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!)
).href;

async function initializeFirebase() {
  const serviceAccount = await import(serviceAccountPath);

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount.default),
    });
    console.log("Firebase inicializado correctamente");
  } else {
    console.log("Firebase ya estaba inicializado");
  }
}

await initializeFirebase().catch((error) => {
  console.error("Error al inicializar Firebase:", error);
});

export { admin };
