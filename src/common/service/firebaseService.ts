import { initializeApp } from "firebase/app"
import { collection, getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyCHT6nuJj6GyMUuauyYysoEgGTylSXbgb8",
    authDomain: "interview-indocyber.firebaseapp.com",
    projectId: "interview-indocyber",
    storageBucket: "interview-indocyber.appspot.com",
    messagingSenderId: "179941350676",
    appId: "1:179941350676:web:861c4a39fa4b3e20fb7601"
};
const app = initializeApp(firebaseConfig);

export const firestoreService = getFirestore(app)

export const blogCollectionRef = collection(firestoreService, 'blog')