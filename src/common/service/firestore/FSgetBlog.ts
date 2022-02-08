import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { blogCollectionRef, firestoreService } from "../firebaseService";

export async function FSgetBlogList() {

    let data = await (await getDocs(blogCollectionRef)).docs.map(ct => ({ ...ct.data(), id: ct.id }))
    return data
}

export async function FSgetOneBlog(id: any) {
    let data = doc(firestoreService, "blog", id)
    return await (await getDoc(data)).data()
}