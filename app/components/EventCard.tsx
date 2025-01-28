import { Text, View, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
const EventCard = () => {
  return (
    

    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 ">
   
      <View className="flex flex-row justify-between font-bold items-center  w-full ">
        <Text className=" text-white">
        Today's Events
        </Text>
        <Pressable>
            <View className="flex flex-row items-center justify-end bg-violet-100 p-2 rounded">
            <Text className="  text-[#5636A7]  ">All events </Text>
            <MaterialIcons name="keyboard-arrow-right" size={18} color="#5636A7" />
            </View>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between py-2 font-bold  w-full">
        <Text className="text-sm font-bold text-white">Deen Dialogues</Text>
        <Text className="text-sm font-bold text-white">5:30 PM</Text>
      </View>
      <View className="flex flex-row justify-between py-2 font-bold  w-full">
        <Text className="text-sm font-bold text-white">Sisters heart to heart</Text>
        <Text className="text-sm font-bold text-white">4:00 PM</Text>
      </View>
          </View>
  )
}

export default EventCard