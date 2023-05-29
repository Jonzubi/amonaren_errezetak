import { API_URL } from '../../constants/constants';

const getImageUrlWithName = (name: string | undefined) =>
  `${API_URL}/images/${name}`;

export { getImageUrlWithName };
