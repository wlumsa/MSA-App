import { Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const PrayerCard = () => {
  return (
    

    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between   ">
     <LinearGradient

      colors={[  '#8D6EDB', '#5636A7', '#5636A7']}
      start={{ x: -0.1, y: 0.5 }}
      style={{ padding: 20, borderRadius: 12, width: '100%' }}
      >
    {/* <LinearGradient
      colors={['#814CD0', '#49129D', '#2E046D']}
      start={{ x: -0.1, y: 0.5 }}
      style={{ padding: 20, borderRadius: 12, width: '100%' }}
      >  */}
      <Text className=" text-white">
        Upcoming Salah
      </Text>
      <View className="flex flex-row justify-between py-4 font-bold  w-full">
        <Text className="text-4xl font-bold text-white">Fajr</Text>
        <Text className="text-4xl font-bold text-white">6:00 AM</Text>
      </View>
      
      <View className="" >
        <Text className="text-white ">
          in 1 hour 42 min
        </Text>
      </View>
      <Pressable>
        <View className="flex flex-row  justify-end ">
          <Text className="text-white underline">View all timings</Text>
        </View>
      </Pressable>
     </LinearGradient> 
    </View>
  )
}

export default PrayerCard