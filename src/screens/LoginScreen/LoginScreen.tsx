import { View, Text } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <Input
        placeholder="Sartu zure emaila..."
        leftIcon={
          <AntDesign name={'mail'} size={24} style={{ marginRight: 5 }} />
        }
      />
      <Input
        placeholder="Sartu zure pasahitza..."
        secureTextEntry={true}
        leftIcon={
          <AntDesign name={'key'} size={24} style={{ marginRight: 5 }} />
        }
      />
      <Button
        title={'Sartu'}
        color={'#00BB69'}
        containerStyle={{
          width: '100%',
          marginTop: 20,
        }}
      />
    </View>
  );
}
