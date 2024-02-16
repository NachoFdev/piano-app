import { loginWithEmailPassword, logoutFirebase } from '../../firebase/providers';
import { clearUdsLogout } from '../crud/crudSlice';
import { checkingCredentials, login, logout } from './';


export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    };
};


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const resp = await loginWithEmailPassword({ email, password });
        console.log(resp);
        if ( !resp.ok ) return dispatch( logout( resp ) );
        dispatch( login( resp ) );
    };
};


export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();
        dispatch( clearUdsLogout() );
        dispatch( logout() );
    };
};