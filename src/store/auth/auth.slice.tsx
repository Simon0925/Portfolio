import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Auth {
  isLogin: boolean;
  loading: boolean;
}

const initialState: Auth = {
  isLogin: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ login: boolean }>) => {
      state.isLogin = action.payload.login;
      state.loading = false; 
    },
    logout: (state) => {
      state.isLogin = false;
      state.loading = false; 
    },
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, isLoading } = authSlice.actions;
export default authSlice.reducer;