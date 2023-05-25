import { API_URL } from '../../constants/constants';
import { User } from '../../types/User';
import axios from '../axios';

export const createUser = (user: User) => axios.post(`${API_URL}/user`, user);
export const login = (user: User) => axios.post(`${API_URL}/auth/login`, user);
export const loginGoogle = ({ token }: { token: string }) =>
  axios.post(`${API_URL}/auth/googleLogin`, { token });
export const getProfile = (token: string) =>
  axios.get(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const patchUsername = (token: string, newUsername: string) =>
  axios.patch(
    `${API_URL}/user/username`,
    {
      username: newUsername,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
