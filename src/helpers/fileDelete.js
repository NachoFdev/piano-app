import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/config';



export const fileDelete = async( file ) => {

    const desertRef = ref( storage,  );

    try {
        
        const resp = deleteObject( desertRef );
        console.log(resp);

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    };

};