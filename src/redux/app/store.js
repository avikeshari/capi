import { configureStore } from '@reduxjs/toolkit';
import reactionReducer from '../features/reactionSlice';

const store = configureStore({
  reducer: {
    reaction: reactionReducer,
  },
});

export default store;