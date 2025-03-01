import { View, Text, Pressable } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import React from 'react'

const Event = () => {
  return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-white rounded-xl px-4 py-2 '>
      <View>

      </View>
      <View className='flex flex-row '>
        <Text className="text-lg font-semibold text-gray-600  ">
          February 24   |
        </Text>
        <Text className="text-lg font-semibold text-[#5636A7] px-2"> Sisters Heart to Heart </Text>
      </View>
        <View className='flex flex-col justify-between w-full py-4 font-bold'>
            <Text className="text-md font-semibold text-gray-600  ">Strengthen your Islamic knowledge and meet new friends. </Text>
            <View className='flex flex-row justify-between w-full py-2 font-bold'>
                <Text className="text-md font-semibold text-gray-500">Peters Building | 4:00 PM - 5:00 PM</Text>
            </View>
           <View className='flex flex-row justify-end'>
            <Pressable className="bg-[#5636A7] w-36 p-2  rounded-xl text-center mt-2 flex flex-row items-center justify-center" onPress={() => alert("clicked")}>
                        <Text className="text-white text-center font-semibold ">Register here</Text>
                        <ChevronRight size={18} color="#ffffff" strokeWidth={2.5}/>
                </Pressable>
           </View>
        </View>
    </View>
  )
} 

export default Event