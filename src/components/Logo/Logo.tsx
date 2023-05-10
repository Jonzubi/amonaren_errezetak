import { Image, ImageStyle, StyleProp } from 'react-native';
import styles from './Logo.android.styles';

interface LogoProps {
  imageStyle?: StyleProp<ImageStyle>;
}
export default function Logo({ imageStyle } : LogoProps) {
  return (
    <Image
      source={require('../../assets/logo.png')}
      resizeMode="contain"
      style={[styles.logo, imageStyle]}
    />
  );
}
