import { View } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Text, Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddRecipeScreen() {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text h3>{t('addRecipeScreen.title')}</Text>
      <Input
        placeholder={t('addRecipeScreen.inputTitle')}
        leftIcon={
          <MaterialIcons name={'title'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setTitle(value)}
      />
      <ChooseImages />
      <Input
        placeholder={t('addRecipeScreen.inputDescription')}
        leftIcon={
          <MaterialIcons
            name={'description'}
            size={24}
            style={{ marginRight: 5 }}
          />
        }
        onChangeText={(value) => setDescription(value)}
        multiline
        inputStyle={{
          height: 300,
        }}
      />
    </SafeAreaView>
  );
}
