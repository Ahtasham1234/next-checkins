import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getCheckIns() {
  const querySnapshot = await getDocs(collection(db, "checkIns"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });

    // console.log(`${doc.id} => ${doc.data()}`);
  });
  //   console.log(data);
  return data;
}
