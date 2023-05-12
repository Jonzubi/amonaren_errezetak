module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@rneui)',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native', './jest.setup.ts'],
  moduleNameMapper: {
    '^expo$': 'expo/build/Expo.fx',
    '^expo/(.*)$': 'expo/build/$1',
    '^@expo/(.*)$': '<rootDir>/node_modules/@expo/$1',
  },
};
