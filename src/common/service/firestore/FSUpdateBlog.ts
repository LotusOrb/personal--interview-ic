import { doc, updateDoc } from "firebase/firestore/lite"
import { firestoreService } from "../firebaseService"

export const FSUpdateBlog = async (id: any, data: { body: any, title: any }) => {
    let docRef = doc(firestoreService, "blog", id)
    await updateDoc(docRef, data)
}