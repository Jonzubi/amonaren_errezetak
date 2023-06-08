import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {
  AuthStackParamList,
  MainStackParamList,
  SplashStackParamList,
} from './types/StackParamList';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import eus_json from './i18n/eus.json';
import 'i18next';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen/AddRecipeScreen';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import UserAvatar from './components/UserAvatar/UserAvatar';
import UserScreen from './screens/UserScreen/UserScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import ListRecipes from './screens/ListRecipes/ListRecipes';

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

const RootStack = createStackNavigator();
const UserStack = createStackNavigator();
const MainStack = createBottomTabNavigator<MainStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const SplashStack = createStackNavigator<SplashStackParamList>();

const UserNav = () => (
  <UserStack.Navigator>
    <UserStack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerShown: false,
      }}
    />
    <UserStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <UserStack.Screen
      name="MyRecipes"
      component={ListRecipes}
      options={{
        headerShown: false,
      }}
    />
  </UserStack.Navigator>
);

const MainNav = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
        tabBarIcon: () => <AntDesign name="home" size={25} />,
      }}
    />
    <MainStack.Screen
      name="AddRecipe"
      component={AddRecipeScreen}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
        tabBarIcon: () => <Ionicons name="add-circle-outline" size={40} />,
      }}
    />
    <MainStack.Screen
      name="User"
      component={UserNav}
      options={{
        tabBarLabel: () => null,
        headerShown: false,
        tabBarIcon: () => <UserAvatar />,
      }}
    />
  </MainStack.Navigator>
);

const AuthNav = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={RegisterScreen}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <SplashStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={MainNav}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Auth"
          component={AuthNav}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
