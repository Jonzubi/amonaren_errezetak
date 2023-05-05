import { useEffect } from 'react';
import { Modal, View } from 'react-native';
import styles from './CustomToast.android.styles';
import colors from '../../constants/colors';
import { Text } from 'react-native-elements';

interface CustomToast {
  visible: boolean;
  text: string;
  closeModal(): void;
}
export default function CustomToast({
  visible,
  text,
  closeModal,
}: CustomToast) {
  useEffect(() => {
    if (!visible) return;
    setTimeout(() => {
      closeModal();
    }, 1000);
  }, [visible]);
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.container,
            { borderLeftColor: colors.RED, borderLeftWidth: 5 },
          ]}
        >
          <Text>{text}</Text>
        </View>
      </View>
    </Modal>
  );
}
