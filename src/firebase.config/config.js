import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes } from "firebase/storage"
import { getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCJiEkLOzW5Pa5J-IawrZ7suPPbhsDsa1E",
  authDomain: "notables-app.firebaseapp.com",
  projectId: "notables-app",
  storageBucket: "notables-app.appspot.com",
  messagingSenderId: "896258920075",
  appId: "1:896258920075:web:58149477073d8e7794ce8e",
  measurementId: "G-46MG1ZW41V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export function uploadFile(file) {
  const storageRef = ref(storage, v4());

  return uploadBytes(storageRef, file)
    .then(snapshot => {
      return getDownloadURL(snapshot.ref);
    })
    .catch(error => {
      console.error("Error al subir el archivo:", error);
      throw error;
    });
}