import { render, screen, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';

test('renders correctly', () => {
  render(<LoginScreen />);
});
