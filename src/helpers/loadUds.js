import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadUds = async( uid = '' ) => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/piece/ud` );
    const docs = await getDocs( collectionRef );

    const uds = [];
    docs.forEach( doc => {
        uds.push({ id:doc.id, ...doc.data() });
    });
    
    return uds;
};
