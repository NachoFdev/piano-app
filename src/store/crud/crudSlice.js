import { createSlice } from '@reduxjs/toolkit';

export const crudSlice = createSlice({
    name: 'crud',
    initialState: {
        isSaving: false,
        messageSaved: '',
        uds: [],
        active: null,
    },
    reducers: {

        savingNewUd: ( state ) => {
            state.isSaving = true;
        },

        addNewEmptyUd: ( state, action ) => {
            state.uds.push( action.payload );
            state.isSaving = false;
        },

        setActiveUd: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },

        setUds: ( state, action ) => {
            state.uds = action.payload;
        },

        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },

        updateUd: ( state, action ) => {
            state.isSaving = false;
            state.uds = state.uds.map( ud => {

                if ( ud.id === action.payload.id ) {
                    return action.payload;
                };
                return ud;
            });
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },

        setVideoToActiveUd: ( state, action ) => {
            state.active.videoUrls = [ ...state.active.videoUrls, ...action.payload ];
            state.isSaving = false;
        },

        clearUdsLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.uds = [];
            state.active = null;
        },

        deleteUdById: ( state, action ) => {
            state.active = null;
            state.uds = state.uds.filter( ud => ud.id !== action.payload );
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewUd,
               addNewEmptyUd,
               setActiveUd,
               setUds,
               setSaving,
               updateUd,
               deleteUdById,
               setVideoToActiveUd,
               clearUdsLogout } = crudSlice.actions;
