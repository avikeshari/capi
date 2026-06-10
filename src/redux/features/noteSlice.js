import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        note: null
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setNote: (state, action) => {
            state.note = action.payload;
        }
    }
});

export const { setNotes , setNote } = noteSlice.actions;

export const selectNotes = state => state.note.notes;
export const selectNote = state => state.note.note;

export default noteSlice.reducer;