const isEmail = (text: string): boolean => {
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return reg.test(text);
};

const getRedirectUri = (): { redirectUri?: string } =>
  typeof jest !== 'undefined'
    ? {
        redirectUri: 'com.amonaren_errezetak.amonaren_errezetak:/oauthredirect',
      }
    : {};

export { isEmail, getRedirectUri };
