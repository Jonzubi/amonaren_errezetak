import { View } from 'react-native';
import { Card, Text } from '@rneui/themed';

interface Props {
  title: string;
  description: string;
}

export default function Recipe({ title, description, ...props }: Props) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text h4>{description}</Text>
    </Card>
  );
}
