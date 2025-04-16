import { Text, View, Pressable } from "react-native";
import {ChevronRight} from "lucide-react-native";
import { fetchTodaysEvents } from "@/Utils/datafetching";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import { EventInfo } from "@/Utils/types";
const EventCard= () => {

  const [events, setEvents] = useState<EventInfo[]>([])
  useEffect(() => {
    fetchTodaysEvents().then((data) => {
      setEvents(data)
    })
  }, [])
  const router = useRouter();
  


  return (
    
    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 ">
   
      <View className="flex flex-row items-center justify-between w-full font-bold ">
        <Text className="text-white ">
        {events.length > 0 ? "Today's Events" : "No events today"}
        </Text>
        <Link href="/events">
          <Pressable onPress={() => router.navigate('/events')} >
              <View className="flex flex-row items-center justify-end p-2 rounded bg-violet-100">
              <Text className="  text-[#5636A7]  ">All events </Text>
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