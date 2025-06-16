import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { House, Link, AlignJustify, Clock3, MapPin } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind'
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

export default function TabLayout() {
    const navigation = useNavigation();
      const { colorScheme, setColorScheme } = useColorScheme();


  return (

    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

    <Tabs screenOptions={{ tabBarActiveTintColor: '#5636A7' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={24} color={color} strokeWidth={2.5} />,
          headerShown: true,
          headerLeft: () => (   
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}> 
                <AlignJustify size={24} color="#5636A7" style={{ marginLeft: 30 }} strokeWidth={2.5} /> 
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
