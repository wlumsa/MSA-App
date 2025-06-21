import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { House, Link, AlignJustify, Clock3, MapPin } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import {LightTheme, DarkTheme} from '@/Utils/themeOptions';
import { useColorScheme } from 'nativewind';
import { ThemeProvider } from '@react-navigation/native';

export default function TabLayout() {

    const navigation = useNavigation();
const {colorScheme, setColorScheme} = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <ThemeProvider value={theme}>
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.primary
, tabBarInactiveTintColor: '#A9A9A9', tabBarStyle: { backgroundColor: theme.colors.background }, headerStyle: { backgroundColor: theme.colors.background }, headerTitleStyle: { color: theme.colors.text }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={24} color={color} strokeWidth={2.5} />,
          headerShown: true,
          headerTintColor: theme.colors.text,
          headerLeft: () => (   
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}> 
                <AlignJustify size={24} color={theme.colors.primary} style={{ marginLeft: 30 }} strokeWidth={2.5} /> 
            </TouchableOpacity>
          ),

        }}
      />
        <Tabs.Screen
            name="events"
            options={{
            title: 'Events',
            tabBarIcon: ({ color }) => <Link size={24} color={color} strokeWidth={2.5} />,
            }}
        />
    
      <Tabs.Screen
        name="prayertimes"
        options={{
          title: 'Prayer Times',
          tabBarIcon: ({ color }) => <Clock3 size={24} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="Halalfood"
        options={{
          title: 'Halal Food',
          tabBarIcon: ({ color }) => <MapPin size={24}  color={color} strokeWidth={2.5} />,
        }}
      />
    </Tabs>
    </ThemeProvider>
  );
}
