import { addDoc } from "firebase/firestore/lite"
import { blogCollectionRef } from "../firebaseService"

export const FScreateBlog = async (param: { body: string, title: string }) => {
    await addDoc(blogCollectionRef, param)
}