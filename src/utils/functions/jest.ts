const getRedirectUri = (): { redirectUri?: string } =>
  isJestEnv()
    ? {
        redirectUri: 'com.amonaren_errezetak.amonaren_errezetak:/oauthredirect',
      }
    : {};

const isJestEnv = (): boolean => typeof jest !== 'undefined';
export { getRedirectUri, isJestEnv };
