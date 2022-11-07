import {collection, getDocs} from 'firebase/firestore';
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

