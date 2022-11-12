import {collection, getDocs, doc, getDoc, updateDoc, query, where} from 'firebase/firestore';
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

export const toggleFav = async (id) => {
    const docRef = doc(db, 'shoes', id);
    const querySnapshot = await getDoc(docRef);
    //console.log(querySnapshot.data().isFav);
    if(querySnapshot.data().isFav)
        await updateDoc(docRef, {
            isFav: false
        });
    else
        await updateDoc(docRef, {
            isFav: true
        });
}

export const getFavProducts = async () => {
    // Get the collection reference
    const collectionRef = collection(db,'shoes');

    // Conduct the query
    const q = query(collectionRef,where('isFav','==', true));

    // Get query snapshot of all documents in the db;
    const querySnapshot = await getDocs(q);

     // Clean the data
     const clenaedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        
        return {id, ...restOfData};
    });
    
    return clenaedData;
};
