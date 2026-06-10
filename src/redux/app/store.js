import { configureStore } from '@reduxjs/toolkit';
//import reactionReducer from '../features/reactionSlice';
import registerReducer from '../features/registerSlice';
import loginReducer from '../features/loginSlice';
import noteReducer from '../features/noteSlice';

/*const store = configureStore({
  reducer: {
    reaction: reactionReducer,
  },
});*/

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        note: noteReducer
    }
});

export default store;