import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { storage } from '../firebase/config';



export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No existe ningún archivo para cargar');

    let uuid = self.crypto.randomUUID();
    const storageRef = ref( storage, uuid );
    
    try {
        const resp = await uploadBytes( storageRef, file );
        console.log(resp);
        console.log(storageRef.fullPath);
        const url = await getDownloadURL( storageRef );
        console.log(url);
        return url;


    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
};
