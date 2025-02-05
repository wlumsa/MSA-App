import { Text, View, Pressable } from "react-native";
import {ChevronRight} from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
const EventCard = () => {
  return (
    

    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 ">
   
      <View className="flex flex-row items-center justify-between w-full font-bold ">
        <Text className="text-white ">
        Today's Events
        </Text>
        <Pressable>
            <View className="flex flex-row items-center justify-end p-2 rounded bg-violet-100">
            <Text className="  text-[#5636A7]  ">All events </Text>
            <ChevronRight size={18} color="#5636A7" />
            </View>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between w-full py-2 font-bold">
        <Text className="text-sm font-bold text-white">Deen Dialogues</Text>
        <Text className="text-sm font-bold text-white">5:30 PM</Text>
      </View>
      <View className="flex flex-row justify-between w-full py-2 font-bold">
        <Text className="text-sm font-bold text-white">Sisters heart to heart</Text>
        <Text className="text-sm font-bold text-white">4:00 PM</Text>
      </View>
          </View>
  )
}

export default EventCard