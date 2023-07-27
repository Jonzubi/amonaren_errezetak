import { View, Image, Text } from 'react-native';
import styles from './NoRecipes.android.styles';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';

export default function NoRecipes() {
  const { t } = useTranslation();
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/Lottie/NoRecipes.json')}
        loop={false}
      />
      <Text style={styles.text}>{t('noRecipes.mainText')}</Text>
    </View>
  );
}
