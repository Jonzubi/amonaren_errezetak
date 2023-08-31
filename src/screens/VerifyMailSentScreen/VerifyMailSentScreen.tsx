import { View } from 'react-native';
import Logo from '../../components/Logo/Logo';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import styles from './VerifyMailSentScreen.android.styles';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { useUserStore } from 'src/zustand/userStore';

export default function VerifyMailSentScreen() {
  const animationRef = useRef<LottieView>(null);
  const { email } = useUserStore();
  const { t } = useTranslation();

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
        {t('verifyMailSentScreen.mainText', { email })}
      </Text>
      <LottieView
        style={{ width: 300, height: 300 }}
        ref={animationRef}
        source={require('../../assets/Lottie/MailSent.json')}
      />
    </View>
  );
}
