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
        },
        setUds: ( state, action ) => {

        },
        setSaving: ( state ) => {

        },
        updateUd: ( state, action ) => {

        },
        deleteUdById: ( state, action ) => {

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
               deleteUdById } = crudSlice.actions;
