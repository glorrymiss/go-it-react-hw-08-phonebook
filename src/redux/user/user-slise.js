import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './user-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleSuccess = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutSuccess = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};
const handleRefreshSuccess = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshError = state => {
  state.isRefreshing = false;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleSuccess)
      .addCase(logIn.fulfilled, handleSuccess)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshSuccess)
      .addCase(refreshUser.rejected, handleRefreshError)
      .addCase(logOut.fulfilled, handleLogOutSuccess);
  },
});

export const authReducer = authSlice.reducer;
