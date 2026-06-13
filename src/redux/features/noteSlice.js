import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import noteServices from '../../services/noteServices'

export const fetchNotes = createAsyncThunk (
    'Notes/fetchNotes',
    async (_, thunkAPI) => {
        try {
            const response = await noteServices.getNotes();
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message||'Failed to fetch notes'
            )
        }
    }
)

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        //note: null,
        loadingNotes: false,
        notesError: null
    },
    /*reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setNote: (state, action) => {
            state.note = action.payload;
        }
    }*/
    extraReducers (builder) {
        builder.addCase(fetchNotes.pending, (state) => {
            state.loadingNotes = true;
            state.notesError = null;
        })
        .addCase(fetchNotes.fulfilled, (state,action) => {
            state.loadingNotes = false;
            state.notes =action.payload;
        })
        .addCase(fetchNotes.rejected, (state,action) => {
            state.loadingNotes = false;
            state.notes = [];
            state.notesError = action.payload || 'Failed to fetch notes';
        })
   }
});

//export const { setNotes , setNote } = noteSlice.actions;

export const selectNotes = (state) => state.note.notes;
//export const selectNote = (state) => state.note.note;
export const selectLoadingNotes = (state) => state.note.loadingNotes;
export const selectNotesError = (state) => state.note.notesError;

export default noteSlice.reducer;