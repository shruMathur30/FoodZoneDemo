import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  email?: string;
}

const initialState: UserState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
