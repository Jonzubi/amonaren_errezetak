jest.mock('expo-linking', () => {
  const module: typeof import('expo-linking') = {
    ...jest.requireActual('expo-linking'),
    createURL: jest.fn(),
  };

  return module;
});

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

jest.mock('expo-auth-session', () => ({
  // Aquí debes reemplazar las funciones o variables que utiliza tu archivo con el módulo falso
  startAsync: jest.fn(),
  makeRedirectUri: jest.fn(() => 'mocked-redirect-uri'),
  DiscoveryDocument: jest.fn(),
}));
