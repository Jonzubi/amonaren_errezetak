import { Avatar } from 'react-native-elements';
import { RootState } from '../../redux/store';
import styles from './UserAvatar.android.styles';
import { useSelector } from 'react-redux';

interface UserAvatarProps {
  size?: number;
  hardCodeUrl?: boolean;
  hardCodedImageUrl?: string;
}
export default function UserAvatar({
  size,
  hardCodeUrl,
  hardCodedImageUrl,
}: UserAvatarProps) {
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);

  const getUrl = (): { uri: string } | undefined => {
    if (hardCodeUrl)
      return hardCodedImageUrl
        ? {
            uri: hardCodedImageUrl,
          }
        : undefined;
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
