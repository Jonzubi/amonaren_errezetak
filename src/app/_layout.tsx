import { Provider } from 'react-redux';
import { Stack } from 'expo-router';
import { store } from '../redux/store';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'i18next';
import eus_json from '../i18n/eus.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    eus: {
      translation: eus_json,
    },
  },
  returnNull: false,
  fallbackLng: 'eus',
  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}
