import { create } from 'zustand';

export interface UserStore {
  email: string;
  nameSurname: string;
  username: string;
  access_token: string;
  imageUrl: string;
  setAccessToken: (access_token: string) => void;
  setUserEmail: (email: string) => void;
  setUserData: (userData: UserState) => void;
  setUserProfile: (profileData: ProfileData) => void;
  resetUserData: () => void;
}
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

export const useUserStore = create<UserStore>((set) => ({
  email: '',
  nameSurname: '',
  username: '',
  access_token: '',
  imageUrl: '',
  setAccessToken: (access_token: string) => set({ access_token }),
  setUserEmail: (email: string) => set({ email }),
  setUserData: (userData: UserState) => set(userData),
  setUserProfile: (profileData: ProfileData) => set(profileData),
  resetUserData: () =>
    set({
      email: '',
      nameSurname: '',
      username: '',
      access_token: '',
      imageUrl: '',
    }),
}));
