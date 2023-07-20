import { API_URL } from '../../constants/constants';
import { PatchUser } from '../../interfaces/api/user/PatchUser';
import { User } from '../../types/User';
import { getHeaderWithAccessToken } from '../../utils/functions/axiosOptions';
import axios from '../axios';

export const createUser = (user: User) => axios.post(`${API_URL}/user`, user);
export const login = (user: User) => axios.post(`${API_URL}/auth/login`, user);
export const loginGoogle = ({ token }: { token: string }) =>
  axios.post(`${API_URL}/auth/googleLogin`, { token });
export const getProfile = (token: string) =>
  axios.get(`${API_URL}/auth/profile`, getHeaderWithAccessToken(token));

export const patchUser = (
  token: string,
  { username, nameSurname, newImage }: PatchUser,
) =>
  axios.patch(
    `${API_URL}/user`,
    {
      username,
      nameSurname,
      newImage,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
