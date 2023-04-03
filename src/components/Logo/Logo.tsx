import { Image } from 'react-native';
import styles from './Logo.android.styles';

export default function Logo(props) {
  return (
    <Image
      source={require('../../assets/logo.png')}
      resizeMode="contain"
      style={{ ...styles.logo, ...props.style }}
    />
  );
}
