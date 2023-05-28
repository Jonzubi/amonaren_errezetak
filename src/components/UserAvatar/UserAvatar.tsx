import { Avatar } from 'react-native-elements';
import { RootState } from '../../redux/store';
import styles from './UserAvatar.android.styles';
import { useSelector } from 'react-redux';

interface UserAvatarProps {
  size?: number;
  hardCodeUrl?: string;
}
export default function UserAvatar({ size, hardCodeUrl }: UserAvatarProps) {
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);

  const getUrl = () => {
    if (hardCodeUrl) return { uri: hardCodeUrl };
    return imageUrl
      ? {
          uri: imageUrl,
        }
      : undefined;
  };
  return (
    <Avatar
      size={size || 25}
      rounded
      icon={{ name: 'user', type: 'antdesign' }}
      source={getUrl()}
      containerStyle={{
        backgroundColor: 'silver',
      }}
    />
  );
}
