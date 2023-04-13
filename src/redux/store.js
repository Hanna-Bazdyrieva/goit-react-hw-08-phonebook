import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import filterReducer from './filterSlice';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from './auth/authSlice';

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const persistedAuthReducer = persistReducer(authPersistConfigs, authReducer);

export const  store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devtools: process.env.NODE_ENV === 'development', //devtools on only in dev.mode
});

export const persistor = persistStore(store);

