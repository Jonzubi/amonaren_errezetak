import { Avatar } from 'react-native-elements';
import colors from '../../constants/colors';
import { useUserStore } from 'src/zustand/userStore';

interface UserAvatarProps {
  size?: number;
  hardCodeUrl?: boolean;
  hardCodedImageUrl?: string;
  focused?: boolean;
}
export default function UserAvatar({
  size,
  hardCodeUrl,
  hardCodedImageUrl,
  focused,
}: UserAvatarProps) {
  const { imageUrl } = useUserStore();

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
      containerStyle={[
        {
          backgroundColor: 'silver',
        },
        focused && {
          borderColor: colors.BLACK,
          borderWidth: 1,
        },
      ]}
    />
  );
}
