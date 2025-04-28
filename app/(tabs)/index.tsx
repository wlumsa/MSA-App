import { Text, View, Pressable, ScrollView } from "react-native";
import { Clock3, Globe, MapPin } from "lucide-react-native";
import EventCard from "../components/EventCard/EventCard";
import PrayerCard from "../components/PrayerCard/PrayerCard";
import AyahCard from "../components/AyahCard/AyahCard";
import * as Linking from 'expo-linking';
import IconComponent from "../components/Icon/Icon";
import { useState } from "react";
// import Push from "../PushNotifications";
export default function Index() {
  
   const [isPressed, setIsPressed] = useState(false);
    const onPress = () => {
      setIsPressed(!isPressed);
    };

  return (
    <ScrollView
      className="flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] "
    >
       {/* <Stack.Screen
        options={{
          headerLeft: () => <Text className="font-bold">logo</Text>,
          title: "Home",
          headerRight: () => <Pressable> <Ionicons name="menu-outline" size={32} color="black" /> </Pressable>,
        }}
      /> */}
      <View className="items-center mx-4 ">
      <View className="flex flex-row justify-between w-full px-4 ">
        <Text className="text-3xl font-bold text-[#2E046D] pb-2 ">
          WLU MSA
        </Text>

      </View>
      <PrayerCard />
      <AyahCard />
      <EventCard />
     
      <View className="flex flex-row items-center justify-center gap-8 py-4 mt-8 space-x-8 ">
        <IconComponent icon={<MapPin  size={24} color="#9055FF" strokeWidth={2.5}/>  } link="/halalfood" text="Halal food"/>
        <IconComponent icon={<Clock3  size={24} color="#9055FF" strokeWidth={2.5}/> } link="/prayertimes" text="Prayer Times"/>
        <IconComponent icon={<Globe  size={24} color="#9055FF" strokeWidth={2.5}/>} link="https://www.wlumsa.org/" text="Website"/>
      </View>
      </View>
      <View className="w-full p-4 ">
     <Pressable  className={` p-4 rounded-xl my-4 ${isPressed ? "bg-[#19033b]" : "bg-[#2e046d]"} `} 
      onPressIn={onPress}
      onPressOut={onPress} 
      onPress= { 
      () => Linking.openURL('https://www.wlumsa.org/ramadan')}>
        <Text className="text-[#ffffff]  text-center font-bold ">Donate to the MSA</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}