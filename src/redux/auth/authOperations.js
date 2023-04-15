import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUserApi,
  logoutUserApi,
  refreshtUserApi,
  registerUserApi,
} from 'services/herokuAPI';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (creds, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(creds);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (creds, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(creds);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) return rejectWithValue();

    try {
      const data = await refreshtUserApi(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//   export const getUserData = createAsyncThunk(
//     "auth/getUserData",
//     async (_, { rejectWithValue, getState }) => {
//       const { idToken } = getState().auth;
//       try {
//         const userData = await getUserDataApi(idToken);
//         return userData;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     },
//     {
//       condition: (_, { getState }) => {
//         const { idToken } = getState().auth;
//         return Boolean(idToken);
//       },
//     }
//   );
