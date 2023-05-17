import { Card, Text } from '@rneui/themed';
import styles from './Recipe.android.styles';
import { API_URL } from '../../constants/constants';

interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function Recipe({ title, description, image }: Props) {
  return (
    <Card containerStyle={styles.container}>
      <Card.Title>
        <Text h4>{title}</Text>
      </Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: `${API_URL}/images/${image}` }} />
      <Card.Divider />
      <Text>{description}</Text>
    </Card>
  );
}
