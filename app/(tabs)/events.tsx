import { View, Text } from 'react-native'
import React from 'react'
import Event from '../components/Event'
import { ScrollView } from 'react-native'
const events = () => {
  return (
    <ScrollView
         className="flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] "
       >
      <View className="items-center mx-4 ">
      <View className="flex flex-row justify-between w-full px-4 ">
        <Text className="text-3xl font-bold text-[#2E046D] pb-2 ">
          Annoucements
        </Text>
      </View>
      <View className='flex flex-col gap-6 w-full py-8'> 
        <Event />
        <Event />
        <Event />
        
      </View>
      </View>
    </ScrollView>
  )
}

export default events