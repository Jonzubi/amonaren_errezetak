import { ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';
import { Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import styles from './SubmitButton.android.styles';

interface SubmitButtonProps {
  isLoading: boolean;
  handleLogin(): void;
}
export default function SubmitButton({
  isLoading,
  handleLogin,
}: SubmitButtonProps) {
  const { t } = useTranslation();
  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size={'large'}
          color={colors.MAIN_GREEN}
          style={styles.button}
        />
      )}
      {!isLoading && (
        <Button
          title={t('forms.login_button')}
          color={colors.MAIN_GREEN}
          containerStyle={styles.button}
          onPress={handleLogin}
        />
      )}
    </>
  );
}
