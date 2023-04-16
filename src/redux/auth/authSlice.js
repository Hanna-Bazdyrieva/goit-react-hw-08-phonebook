import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperations';
import { toast } from 'react-toastify';

const notify = (message) => toast.error(message, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });


const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state) => {
          state.isLoading = false;
          notify('oops... You entered incorrect data');        }
      );
  },
});

export const authReducer = authSlice.reducer;
