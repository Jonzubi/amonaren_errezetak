import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Router from './src/router';
import { store } from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
