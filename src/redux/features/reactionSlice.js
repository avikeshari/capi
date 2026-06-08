import { createSlice } from '@reduxjs/toolkit'

export const reactionSlice = createSlice({
    name: 'reaction',
    initialState: { likes: 0 },
    reducers: {
        setLikes: (state,action) => {
            state.likes += 1;
        },
        setDislikes: (state,action) => {
            if (state.likes > 0){
                state.likes -= 1;
            }
            else;
        }
    }
});

export const { setLikes, setDislikes } = reactionSlice.actions;

export const selectLikes = (state) => state.reaction.likes; //Exporting selector to get the likes from the state
//export const selectDislikes = (state) => state.reaction.dislikes;

export default reactionSlice.reducer;