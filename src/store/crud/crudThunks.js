import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyUd, deleteUdById, savingNewUd, setActiveUd, setSaving, setUds, setVideoToActiveUd, updateUd } from './crudSlice';
import { loadUds } from '../../helpers/loadUds';
import { fileUpload } from '../../helpers/fileUpload';


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( savingNewUd() );

        const { uid } = getState().auth;

        const newUd = {
            title: '',
            body: '',
            videoUrls: [],
            index: 0
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/piece/ud` ) );
        await setDoc( newDoc, newUd );

        newUd.id = newDoc.id;

        dispatch( addNewEmptyUd( newUd ) );
        dispatch( setActiveUd( newUd ) );
    };
};



export const startLoadingUds = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');
        
        const uds = await loadUds( uid );
        dispatch( setUds( uds ) );
    };
};



export const startSaveUd = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:ud } = getState().crud;

        const udToFirestore = { ...ud };
        delete udToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/piece/ud/${ ud.id }` );
        await setDoc( docRef, udToFirestore, { merge:true } );

        dispatch( updateUd( ud ) );
    };
};



export const startUploadingFile = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        
        const videoUrl = await fileUpload( files );

        // const fileUploadPromises = [];
        // for ( const file of files ) {
        //     fileUploadPromises.push( fileUpload( file ) );
        // };
        // const videosUrl = await Promise.all( fileUploadPromises );
        
        dispatch( setVideoToActiveUd( videoUrl ) );
    };
};



export const startDeletingUd = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active:ud } = getState().crud;

        const docRef = doc( FirebaseDB, `${ uid }/piece/ud/${ ud.id }` );
        await deleteDoc( docRef );

        dispatch( deleteUdById( ud.id ) );
    };
};