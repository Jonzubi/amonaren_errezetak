import { Stack } from 'expo-router';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(user)/profile"
        options={{
          headerShown: true,
          headerTitle: t('headerTitles.profile'),
        }}
      />
      <Stack.Screen
        name="(user)/fav-recipes"
        options={{
          headerShown: true,
          headerTitle: t('headerTitles.favRecipes'),
        }}
      />
      <Stack.Screen
        name="(user)/my-recipes"
        options={{
          headerShown: true,
          headerTitle: t('headerTitles.myRecipes'),
        }}
      />
      <Stack.Screen
        name="(user)/edit-recipe"
        options={{
          headerShown: true,
          headerTitle: t('headerTitles.editRecipe'),
        }}
      />
      <Stack.Screen
        name="recipe/[recipeId]"
        options={{
          headerShown: true,
          headerTitle: t('headerTitles.recipeDetail'),
        }}
      />
    </Stack>
  );
}
