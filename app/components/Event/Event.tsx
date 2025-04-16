import { View, Text, Pressable } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import { Linking } from 'react-native'
import { Image } from 'expo-image';
import MSA_Logo from '../assets/MSA_Logo.png' 
import { getImageByID } from '@/Utils/datafetching';
import { useEffect } from 'react';
import React from 'react'
import { Event as EventType } from '@/Utils/types'

const Event:React.FC<EventType> = ({name, description, date, time,location, link, image_id}) => {
  const [image, setImage] = React.useState<string | null>(null)
  if(image_id) {
    useEffect(() => {
      getImageByID(image_id).then((data) => {
        setImage(data.toString())
        console.log(data)
      })
    }, [])
  }
  


  const formattedDate = new Date(date).toDateString()
  return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-white rounded-xl px-4 py-2 '>
      <View className=''>
     {image_id &&  <Image
        style={{ width: "100%", height: 100, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
        source={ image  }
      />}
      </View>

      <View className='flex flex-col '>
        <Text className="text-lg font-semibold text-[#5636A7] ">{name} </Text>
        <Text className="text-md text-gray-600  ">
          {formattedDate}   
        </Text>
      </View>
        <View className='flex flex-col justify-between w-full py-4 font-bold'>
            <Text className="text-md  text-gray-600  ">{description} </Text>
            <View className='flex flex-row justify-between w-full py-2 font-bold'>
                <Text className="text-md  text-gray-500">{location} | {time}</Text>
            </View>
           <View className='flex flex-row justify-end'>
            {link && <Pressable className="bg-[#5636A7] w-fit p-2  rounded-xl text-center mt-2 flex flex-row items-center justify-center" onPress={() => Linking.openURL(link)}>
                        <Text className="text-white text-center font-semibold ">Register here</Text>
                        <ChevronRight size={18} color="#ffffff" strokeWidth={2.5}/>
                </Pressable>}
           </View>
        </View>
    </View>
  )
} 

export default Event