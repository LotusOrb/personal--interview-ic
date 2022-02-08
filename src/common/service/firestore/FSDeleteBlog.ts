import { deleteDoc, doc } from "firebase/firestore/lite"
import { blogCollectionRef, firestoreService } from "../firebaseService"

export const FSDeleteBlog = async (id: any) => {
    let docRef = doc(firestoreService, "blog", id)
    await deleteDoc(docRef)
}