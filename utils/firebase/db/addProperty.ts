import { PropertyFormDataType } from "./types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
export const addPropertyToDB = async (data: PropertyFormDataType) => {
  const colRef = collection(db, "properties");
  await addDoc(colRef, data);
};
