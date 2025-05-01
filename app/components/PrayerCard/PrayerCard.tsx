import { Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from 'expo-router';
import {getNextPrayerTime} from "@/Utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
const PrayerCard = () => {
  
  const {data: nextPrayer, isLoading, error} = useQuery({
    queryKey: ['nextPrayer'],
    queryFn: getNextPrayerTime,
  })


 const convertElapsedTimeToString = (elapsedTime: number) => {
  const hours = Math.floor(elapsedTime / 60);
  const minutes = elapsedTime % 60;
  const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minutesString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  return `${hoursString} ${minutesString}`.trim();
}
  
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
        <Text className="text-4xl font-bold text-white">{nextPrayer?.nextPrayer.name}</Text>
        <Text className="text-4xl font-bold text-white">{nextPrayer?.nextPrayer.time} {nextPrayer?.nextPrayer.ampm}</Text>
      </View>
      
      <View className="flex flex-row  justify-between" >
        <Text className="text-white ">
          in {convertElapsedTimeToString(nextPrayer?.elapsedTime)}
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