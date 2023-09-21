import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";

export async function getCheckIns() {
  const q = query(collection(db, "checkIns"));

  return new Promise((resolve, reject) => {
    const data = [];

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        // Resolve the promise with the fetched data
        resolve(data);
      },
      (error) => {
        // Reject the promise with an error if there's an issue
        reject(error);
      }
    );
  });
}
