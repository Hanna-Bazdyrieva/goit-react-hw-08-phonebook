import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    'auth/register',
    async (creds, {rejectWithValue} ) =>{
        try {
            const data = await registerUserApi(creds)
        return data
        } catch (error) 
         {return rejectWithValue(error.message)
            
        }
    }
)


// export const registerUser = createAsyncThunk(
//     "auth/register",
//     async (userCreds, { rejectWithValue }) => {
//       try {
//         const userData = await registerUserApi(userCreds);
//         return userData;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );
  
//   export const loginUser = createAsyncThunk(
//     "auth/login",
//     async (userCreds, { rejectWithValue }) => {
//       try {
//         const userData = await loginUserApi(userCreds);
//         return userData;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );
  
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