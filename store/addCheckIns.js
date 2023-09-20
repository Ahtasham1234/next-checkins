import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function addCheckIns(data, payload = () => {}) {
  console.log(data);
  try {
    const docRef = await addDoc(collection(db, "checkIns"), {
      ...data,
      createdAt: Timestamp.now(),
    });
    console.log("Document written with ID: ", docRef.id);
    alert("CheckIns added successfully");
    payload();
  } catch (e) {
    console.error("Error adding document: ", e);
    payload();
  }
}
