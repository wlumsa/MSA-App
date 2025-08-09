import { View, Text } from 'react-native'
import React from 'react'
import Event from '../components/Event/Event'
import { ScrollView } from 'react-native'
import { fetchEvents } from '@/Utils/api'
import { useQuery } from '@tanstack/react-query'

const events = () => {

  const {data: events, isLoading, error} = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  })
  
  if (isLoading) return (
    <View className='h-screen px-6 pt-4 bg-background items-center justify-center'>
      <Text className='text-lg mx-4'>Loading events...</Text>
    </View>
  )
  if (error) return (
    <View className='h-screen px-6 pt-4 bg-background items-center justify-center'>
      <Text className='text-lg mx-4'>Error loading events</Text>
    </View>
  )
  if (!events || events.length == 0 ) return (
    <View className='h-screen px-6 pt-4 bg-background '>
        <Text className="text-3xl font-bold text-primary pb-2 ">
          Announcements
        </Text>
      <Text className='text-lg mx-4 my-8 items-center justify-center text-textPrimary'>There are no events at the moment</Text>
    </View>
  )

  return (
    <ScrollView
         className="flex flex-col  h-screen px-6 pt-4 bg-background "
       >
      <View className="items-center mx-4 ">
      <View className="flex flex-row justify-between w-full px-4 ">
        <Text className="text-3xl font-bold text-primary pb-2 ">
          Announcements
        </Text>
      </View>
      <View className='flex flex-col gap-6 w-full py-8'>
        {events.map((event) => (
          <Event key={event.id} name={event.name} description={event.description} date={event.date} time={event.time} location={event.location} link={event.link} image_id={event.image_id} />
        ))
      }
        
        
      </View>
      </View>
    </ScrollView>
  )
}

export default events