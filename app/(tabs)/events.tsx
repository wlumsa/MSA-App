import { View, Text } from 'react-native'
import React from 'react'
import Event from '../components/Event'
import { ScrollView } from 'react-native'
import { fetchEvents } from '@/Utils/datafetching'
import { useEffect } from 'react'
type Event = {
  name: string
  description: string
  date: string
  time: string
  location:string
  link?: string
  image_id:string
}
const events = () => {

  const [events, setEvents] = React.useState<Event[]>([])

   useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data)
    })
  }, [])

  return (
    <ScrollView
         className="flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] "
       >
      <View className="items-center mx-4 ">
      <View className="flex flex-row justify-between w-full px-4 ">
        <Text className="text-3xl font-bold text-[#2E046D] pb-2 ">
          Announcements
        </Text>
      </View>
      <View className='flex flex-col gap-6 w-full py-8'>
        {events.length > 0 ? events.map((event) => (
          <Event key={event.name} name={event.name} description={event.description} date={event.date} time={event.time} location={event.location} link={event.link} image_id={event.image_id} />
        ))
        : <Text className='text-lg mx-4'>No events available right now</Text>}
        
        
      </View>
      </View>
    </ScrollView>
  )
}

export default events