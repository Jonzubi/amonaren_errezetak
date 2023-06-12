export const GOOGLE_WEB_CLIENT_ID =
  '430573762472-qv7ar6kjfik8b44gkhfcqdmvchgc7ro3.apps.googleusercontent.com';
export const GOOGLE_ANDROID_CLIENT_ID =
  '430573762472-rm2c2krf6nih6ae57gnt8mqftv25bbvj.apps.googleusercontent.com';
export const GOOGLE_EXPO_CLIENT_ID =
  '430573762472-rm2c2krf6nih6ae57gnt8mqftv25bbvj.apps.googleusercontent.com';

const API_URL_DEV = 'http://192.168.1.128:3000';
const API_URL_PROD = 'http://localhost:3000';
export const API_URL =
  process.env.NODE_ENV === 'development' ? API_URL_DEV : API_URL_PROD;
