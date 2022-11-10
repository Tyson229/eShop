import {collection, getDocs, doc, getDoc, updateDoc} from 'firebase/firestore';
import db from '../config/firebase';

export const getProducts = async () => {
    // Get the collection reference
    const collectionRef = collection(db,'shoes');

    // Get query snapshot of all documents in the db;
    const querySnapshot = await getDocs(collectionRef);

    // Clean the data
    const clenaedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        return {id, ...restOfData};
    });

    return clenaedData;
};

export const getProductByID = async (id) => {
    const docRef = doc(db, 'shoes', id);

    const querySnapshot = await getDoc(docRef);

    if(!querySnapshot.exists()){
        throw new Error(`Product with id ${id} doesn't exist`);
    }

    return {id: querySnapshot.id, ... querySnapshot.data()};
};

export const addToFav = async (id) => {
    const docRef = doc(db, 'shoes', id);
    
    await updateDoc(docRef, {
        isFav: true
    });
    return true;
}

