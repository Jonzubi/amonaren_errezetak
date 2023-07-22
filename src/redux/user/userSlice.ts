import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getImageUrlWithName } from '../../utils/functions/image';

export interface UserState {
  email: string;
  nameSurname: string;
  username: string;
  access_token: string;
  imageUrl: string;
}

export interface ProfileData {
  nameSurname: string;
  username: string;
  imageUrl?: string;
}

const initialState: UserState = {
  email: '',
  nameSurname: '',
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
      return { ...state, ...action.payload };
    },
    setUserProfile: (state: UserState, action: PayloadAction<ProfileData>) => {
      return { ...state, ...action.payload };
    },
    resetUserData: () => initialState,
  },
});

export const { setAccessToken, setUserData, resetUserData, setUserProfile } =
  userSlice.actions;
export default userSlice.reducer;
