import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  username: string;
  access_token: string;
  imageUrl: string;
}

const initialState: UserState = {
  email: '',
  username: '',
  access_token: '',
  imageUrl: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state: UserState, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    setUserData: (state: UserState, action: PayloadAction<UserState>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setAccessToken, setUserData } = userSlice.actions;
export default userSlice.reducer;
