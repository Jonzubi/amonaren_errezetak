import { API_URL } from '../../constants/constants';
import { User } from '../../types/User';
import axios from '../axios';

export const createUser = (user: User) => axios.post(`${API_URL}/user`, user);
