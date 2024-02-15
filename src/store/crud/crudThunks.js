import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyUd, savingNewUd, setActiveUd } from './crudSlice';


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( savingNewUd() );

        const { uid } = getState().auth;

        const newUd = {
            title: '',
            body: ''
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/piece/ud` ) );
        await setDoc( newDoc, newUd );

        newUd.id = newDoc.id;

        dispatch( addNewEmptyUd( newUd ) );
        dispatch( setActiveUd( newUd ) );
    };
};