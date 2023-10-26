import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import app from './init'

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        slug: doc.data().slug,
        img: doc.data().img,
        new: doc.data().new,
    }));

    return data;
}

export async function retriveDataBySLug(collectionName: string, slug: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, slug));
    const data = snapshot.data();
    return data;
}
export async function retriveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName));
    const data = snapshot.data();
    return data;
}