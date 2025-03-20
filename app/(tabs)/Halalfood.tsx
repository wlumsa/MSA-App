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
            <View className='flex flex-row gap-4 w-full bg-white rounded-xl p-4 shadow-sm shadow-slate-200 h-16 border border-gray-300 items-center'>
            {/* <Search size={24} color={"#2E046D"} strokeWidth={2.5} />
              <TextInput
                placeholder='Search for halal food'
                className=' h-full bg-white text-gray-500 text-lg'
              />
              */}
            </View>
            <View className='flex flex-col gap-6 w-full py-8'>
          
      <HalalfoodCard 
      name='Halal Food'
      description='Halal food is food that is prepared according to Islamic law, as defined in the Quran. The Islamic form of slaughtering animals or poultry, dhabiha, involves killing through a cut to the jugular vein, carotid artery, and windpipe.'
      location='MSA Office'
      category='Asain'
      method='Machine'
      link='https://www.google.com' />
      </View>
      </View>

    </ScrollView>
  )
}

export default HalalFood