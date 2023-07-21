import { createSlice } from '@reduxjs/toolkit';
import {
  registeringUser,
  loginUser,
  logoutUser,
  refreshUser,
} from './operationAuth';
import * as handleFunctionAuth from '../authLogics/authFunction';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registeringUser.fulfilled, handleFunctionAuth.handleAuthFulfield)
      .addCase(registeringUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, handleFunctionAuth.handleAuthFulfield)
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, handleFunctionAuth.handleAuthLogout)
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleFunctionAuth.handleAuthRefresh)
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export const autsReducer = authSlice.reducer;
