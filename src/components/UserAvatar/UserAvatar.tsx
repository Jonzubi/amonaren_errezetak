import { Avatar } from 'react-native-elements';
import { RootState } from '../../redux/store';
import styles from './UserAvatar.android.styles';
import { useSelector } from 'react-redux';

interface UserAvatarProps {
  size?: number;
}
export default function UserAvatar({ size }: UserAvatarProps) {
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);

  return (
    <Avatar
      size={size || 25}
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
