import { API_URL } from '../../constants/constants';
import { esURL } from './url';

const getImageUrlWithName = (name: string | undefined) =>
  esURL(name) ? name : `${API_URL}/images/${name}`;

const isValidBase64 = (base64: string): boolean => {
  const base64RegExp = /^data:image\/(jpeg|jpg|png|gif);base64,/;

  return base64RegExp.test(base64);
};

export { getImageUrlWithName, isValidBase64 };
