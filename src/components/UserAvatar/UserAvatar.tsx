import { Avatar } from 'react-native-elements';
import { RootState } from '../../redux/store';
import styles from './UserAvatar.android.styles';
import { useSelector } from 'react-redux';

export default function UserAvatar() {
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <Avatar
      title={username}
      size={25}
      rounded
      source={{
        uri: imageUrl,
      }}
    />
  );
}
