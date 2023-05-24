import { Avatar } from 'react-native-elements';
import { RootState } from '../../redux/store';
import styles from './UserAvatar.android.styles';
import { useSelector } from 'react-redux';

export default function UserAvatar() {
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);

  return (
    <Avatar
      size={25}
      rounded
      icon={{ name: 'user', type: 'antdesign' }}
      source={
        imageUrl
          ? {
              uri: imageUrl,
            }
          : undefined
      }
      containerStyle={{
        backgroundColor: 'silver',
      }}
    />
  );
}
