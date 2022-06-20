import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './reducers/dataSlice';

export const store = configureStore({
    reducer: { data: dataSlice.reducer}

    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(contactsAPI.middleware)
})