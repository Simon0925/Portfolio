import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth.slice'
import editReducer from './edit/edit.slice'

const store = configureStore({
    reducer: {  
        auth:authReducer,
        edit:editReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;