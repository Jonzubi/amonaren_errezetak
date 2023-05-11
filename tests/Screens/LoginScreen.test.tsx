import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';
import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';

test('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </Provider>,
  );
});
