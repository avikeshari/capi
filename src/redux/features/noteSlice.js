import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: []
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        }
    }
});

export const { setNotes } = noteSlice.actions;

export const selectNotes = state => state.note.notes;

export default noteSlice.reducer;