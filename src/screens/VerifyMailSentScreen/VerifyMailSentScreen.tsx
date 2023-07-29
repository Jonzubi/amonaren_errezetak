import { View } from 'react-native';
import Logo from '../../components/Logo/Logo';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import styles from './VerifyMailSentScreen.android.styles';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function VerifyMailSentScreen() {
  const animationRef = useRef<LottieView>(null);
  const email = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <Logo
        imageStyle={{
          height: 350,
          width: 350,
        }}
      />
      <Text h4 style={{ flexWrap: 'wrap' }}>
        Email bat bidali dugu {email} helbidera emaila egiaztatzeko
      </Text>
      <LottieView
        style={{ width: 300, height: 300 }}
        ref={animationRef}
        source={require('../../assets/Lottie/MailSent.json')}
      />
    </View>
  );
}
