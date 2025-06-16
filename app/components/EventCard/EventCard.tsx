import { Text, View, Pressable } from "react-native";
import {ChevronRight} from "lucide-react-native";
import { fetchTodaysEvents } from "@/Utils/api";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import { EventInfo } from "@/Utils/types";
import { useQuery } from "@tanstack/react-query";
const EventCard= () => {
  const router = useRouter();

  const {data: events, isLoading, error} = useQuery({
    queryKey: ['events'],
    queryFn: fetchTodaysEvents,
  })

    const [isPressed, setIsPressed] = useState(false);
        const onPress = () => {
          setIsPressed(!isPressed);
        };
    



  if (isLoading) return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 '>
      <Text className="text-white ">
        Loading events...
      </Text>
    </View>
  )
  if (error) return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 '>
      <Text className="text-white ">
        Error loading events
      </Text>
    </View>
  )
  if (!events) return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 '>
      <Text className="text-white ">
        No events found
      </Text>
    </View>
  )



  return (
    
    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 ">
   
      <View className="flex flex-row items-center justify-between w-full font-bold ">
        <Text className="text-white ">
        {events.length > 0 ? "Today's Events" : "No events today"}
        </Text>
        <Link href="/events">
          <Pressable onPress={() => router.navigate('/events')} 
          onPressIn={onPress}
          onPressOut={onPress}
          className={`bg-[#5636A7] w-36 p-2  rounded-xl text-center mt-2 flex flex-row items-center justify-center   ` }
            
            >
              <View className={`flex flex-row items-center justify-end p-2 rounded bg-violet-100 ${isPressed ? "bg-violet-300  " :"bg-violet-100 dark:bg-foreground "   }`}>
              <Text className="  text-[#5636A7] dark:text-gray-200  ">All events </Text>
              <ChevronRight size={18} color="#5636A7" />
              </View>
          </Pressable>
        </Link>
      </View>
      {events.map((event) => (
        <View className="flex flex-row justify-between w-full py-2 font-bold">
        <Text className="sm:text-sm font-bold text-white break-words">{event.name}</Text>
        <Text className="text-sm font-bold text-white">{event.time}</Text>
      </View>
      ))
      }
      
          </View>
  )
}

export default EventCard