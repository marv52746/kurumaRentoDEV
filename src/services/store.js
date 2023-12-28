// store.js
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import utilsReducer from './utilsSlice';

const rootReducer = {
  auth: authReducer,
  utils: utilsReducer, // Add the utility reducer
  // Add other reducers if needed
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
