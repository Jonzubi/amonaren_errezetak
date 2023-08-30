import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import UserAvatar from '@components/UserAvatar/UserAvatar';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-recipe"
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              size={40}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ focused }) => <UserAvatar focused={focused} />,
        }}
      />
    </Tabs>
  );
}
