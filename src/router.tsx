import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { StackParamList } from './types/StackParamList';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eus_json from './i18n/eus.json';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next).init({
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

const Stack = createStackNavigator<StackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}