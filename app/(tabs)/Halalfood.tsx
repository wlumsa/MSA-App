import React from 'react'
import HalalfoodCard from '../components/HalalfoodCard'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { Search } from 'lucide-react-native'
import { CircleX } from 'lucide-react-native'
const HalalFood = () => {
  return (
    <ScrollView className='flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] '>
      <View className="items-center mx-4 ">
            <View className="flex flex-row justify-between w-full px-4 ">
              <Text className="text-3xl font-bold text-[#2E046D] pb-2 ">
                Halal food Directory
              </Text>
            </View>
            
      <View className='flex flex-col gap-6 w-full py-8'>
          
          <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
      </View>
      </View>

    </ScrollView>
  )
}

export default HalalFood