import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, {payload}){
        state.user= payload.user
        state.token= payload.token
        state.isAuth = true
    },
    [loginUser.fulfilled](state, {payload}){
        state.user= payload.user
        state.token= payload.token
        state.isAuth = true
    },
    [logoutUser.fulfilled](state){
        state.user= { name: null, email: null }
        state.token= null
        state.isAuth = false
    },
    [refreshUser.fulfilled](state, {payload}){
        state.user= payload
        state.isAuth = true
    }
  }
  // builder=>{
  //     builder.addCase((state)=> state)
  // }
});

export const authReducer = authSlice.reducer;

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//       isAuth: false,
//       idToken: null,
//       localId: null,
//       email: null,
//       refreshToken: null,
//       isLoading: false,
//       error: null,
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(registerUser.fulfilled, (state, { payload }) => {
//           return {
//             ...state,
//             isLoading: false,
//             ...payload,
//             isAuth: true,
//           };
//         })
//         .addCase(loginUser.fulfilled, (state, { payload }) => {
//           return {
//             ...state,
//             ...payload,
//             isAuth: true,
//             isLoading: false,
//           };
//         })
//         .addCase(getUserData.fulfilled, (state, { payload }) => {
//           const { email, localId } = payload;
//           state.isLoading = false;
//           state.email = email;
//           state.localId = localId;
//           state.isAuth = true;
//         })
//         .addMatcher(
//           (action) =>
//             action.type.startsWith("auth") && action.type.endsWith("/pending"),
//           (state) => {
//             state.isLoading = true;
//           }
//         )
//         .addMatcher(
//           (action) =>
//             action.type.startsWith("auth") && action.type.endsWith("/rejected"),
//           (state, { payload }) => {
//             state.isLoading = false;
//             state.error = payload;
//           }
//         );
//     },
//   });
