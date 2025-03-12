import { Text, View, Pressable } from "react-native";
import {ChevronRight} from "lucide-react-native";
import { fetchEvents } from "@/Utils/datafetching";
import { useState } from "react";
import { Link } from "expo-router";
type EventInfoProps = {
  name: string
  date: string
  time: string
}

const EventCard= () => {

  const [events, setEvents] = useState<EventInfoProps[]>([])
  fetchEvents().then((data) => {
    setEvents(data)
  })


  return (
    
    <View className="flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-[#5636A7] rounded-xl p-4 ">
   
      <View className="flex flex-row items-center justify-between w-full font-bold ">
        <Text className="text-white ">
        Today's Events
        </Text>
        <Link href="/events">
          <Pressable>
              <View className="flex flex-row items-center justify-end p-2 rounded bg-violet-100">
              <Text className="  text-[#5636A7]  ">All events </Text>
              <ChevronRight size={18} color="#5636A7" />
              </View>
          </Pressable>
        </Link>
      </View>
      {events.map((event) => (
        <View className="flex flex-row justify-between w-full py-2 font-bold">
        <Text className="text-sm font-bold text-white">{event.name}</Text>
        <Text className="text-sm font-bold text-white">{event.time}</Text>
      </View>
      ))
      }
      
          </View>
  )
}

export default EventCard