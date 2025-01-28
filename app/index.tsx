import { Text, View, Pressable } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import EventCard from "./components/EventCard";
import PrayerCard from "./components/PrayerCard";
import AyahCard from "./components/AyahCard";
import * as Linking from 'expo-linking';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function Index() {
  return (
    <View
      className="flex flex-col items-center h-screen bg-[#F8F5FF] px-6  pt-12 "
    >
      <View className="mx-4 items-center ">
      <View className="flex flex-row justify-between  w-full px-4 py-8">
        <Text className="text-3xl font-bold text-[#2E046D]">
          WLU MSA
        </Text>
        <Pressable>
        <Ionicons name="menu-outline" size={32} color="black" />       
         </Pressable>
      </View>
      <PrayerCard />
      <AyahCard />
      <EventCard />
     
      <View className="flex flex-row items-center justify-center space-x-8 gap-8 py-4 mt-8 ">
     <View className="text-center items-center">
      <Pressable className="shadow-md shadow-slate-200 bg-[#ffffff] text-center items-center p-4 rounded-xl h-16 w-16" onPress={() => alert("clicked")}>
      <FontAwesome6 name="location-dot" size={24} color="#9055FF" />        
      </Pressable>
        <Text className=" text-center my-2 ">Halal Food </Text>
     </View>
      <View className="text-center items-center justify-center ">
      <Pressable className="shadow-md shadow-slate-200   bg-[#ffffff] text-center items-center p-4 rounded-xl h-16 w-16" onPress={() => alert("clicked")}>
      <Ionicons name="time" size={24} color="#9055FF" />  
      </Pressable>
        <Text className=" text-center my-2  ">Prayer Times </Text>
     </View>

     <View className="text-center items-center">
      <Pressable className="shadow-md shadow-slate-200 bg-[#ffffff] text-center items-center p-4 rounded-xl h-16 w-16" onPress= { () => Linking.openURL('https://www.wlumsa.org/')}>
        <Octicons name="link" size={24} color="#9055FF" />       
        </Pressable>
        <Text className=" text-center my-2 ">Website</Text>
     </View>

      </View>
      </View>
      <View className=" w-full p-4">
     <Pressable  className=" bg-[#2e046d] p-4 rounded-xl my-4  " onPress= { () => Linking.openURL('https://www.wlumsa.org/ramadan')}>
        <Text className="text-[#ffffff]  text-center font-bold ">Donate to the MSA</Text>
      </Pressable>
      </View>
    </View>
  );
}
