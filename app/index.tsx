import { Text, View, Pressable, ScrollView } from "react-native";
import { Clock3, Globe, MapPin } from "lucide-react-native";
import EventCard from "./components/EventCard";
import PrayerCard from "./components/PrayerCard";
import AyahCard from "./components/AyahCard";
import * as Linking from 'expo-linking';
import { NavigationState } from "@react-navigation/native";
export default function Index() {
  

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
     <View className="items-center text-center">
      <Pressable className=" justify-center items-center w-16 h-16 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] rounded-xl" onPress={() => alert("clicked")}>
      <MapPin  size={24} color="#9055FF" strokeWidth={2.5}/>        
      </Pressable>
        <Text className="my-2 text-center ">Halal Food </Text>
     </View>
      <View className="items-center justify-center text-center ">
      <Pressable className="shadow-md shadow-slate-200 justify-center   bg-[#F9FAFB] text-center items-center p-4 rounded-xl h-16 w-16" onPress={() => alert("clicked")}>
      <Clock3  size={24} color="#9055FF" strokeWidth={2.5}/>  
      </Pressable>
        <Text className="my-2 text-center ">Prayer Times </Text>
     </View>

     <View className="items-center text-center">
      <Pressable className=" w-16 h-16 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB]  justify-center items-center rounded-xl" onPress= { () => Linking.openURL('https://www.wlumsa.org/')}>
        <Globe  size={24} color="#9055FF" strokeWidth={2.5}/>      
        </Pressable>
        <Text className="my-2 text-center ">Website</Text>
     </View>

      </View>
      </View>
      <View className="w-full p-4 ">
     <Pressable  className=" bg-[#2e046d] p-4 rounded-xl my-4  " onPress= { () => Linking.openURL('https://www.wlumsa.org/ramadan')}>
        <Text className="text-[#ffffff]  text-center font-bold ">Donate to the MSA</Text>
      </Pressable>
      </View>
    </ScrollView>
  );
}
