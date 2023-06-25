import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  sessionId: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');

      // localStorage.setItem('accountId', action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;
