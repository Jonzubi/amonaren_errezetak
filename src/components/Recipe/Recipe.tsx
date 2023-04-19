import { View } from 'react-native';
import { Card, Text } from '@rneui/themed';
import styles from './Recipe.android.styles';

interface Props {
  title: string;
  description: string;
}

export default function Recipe({ title, description, ...props }: Props) {
  return (
    <Card containerStyle={styles.container}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text h4>{description}</Text>
    </Card>
  );
}
