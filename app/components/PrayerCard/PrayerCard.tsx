import { Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from 'expo-router';
import {getNextPrayerTime} from "@/Utils/api";
import { useQuery } from "@tanstack/react-query";
const PrayerCard = () => {
  
  const {data: nextPrayer, isLoading, error} = useQuery({
    queryKey: ['nextPrayer'],
    queryFn: getNextPrayerTime,
  })




  
  return (
    

    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between ">
      <Link href="/prayertimes"> 
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
      <View>
      <Text className=" text-white ">
        Upcoming Salah
      </Text>
      </View>
      <View className="flex flex-row justify-between py-4 font-bold  w-full">
        <Text className="text-4xl font-bold text-white">Fajr</Text>
        <Text className="text-4xl font-bold text-white">{nextPrayer}</Text>
      </View>
      
      <View className="flex flex-row  justify-between" >
        <Text className="text-white ">
          in 1 hour 42 min
        </Text>
        <Pressable>
        <Link href="/prayertimes">
      
        </Link>
      </Pressable>
      </View>
     
     </LinearGradient> 
     </Link>
    </View>
  )
}

export default PrayerCard