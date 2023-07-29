import { View } from 'react-native';
import Logo from '../../components/Logo/Logo';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';

export default function VerifyMailSentScreen() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View>
      <Logo />
      <LottieView
        ref={animationRef}
        source={require('../../assets/Lottie/MailSent.json')}
        loop={false}
      />
    </View>
  );
}
