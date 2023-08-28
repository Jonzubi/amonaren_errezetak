import { Image, View } from 'react-native';
import styles from './LogoAvatar.android.styles';

export default function LogoAvatar() {
  return (
    <View>
      <Image
        source={require('../../assets/logo_no_text.png')}
        style={styles.logoAvatar}
      />
    </View>
  );
}
