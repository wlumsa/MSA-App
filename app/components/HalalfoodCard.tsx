import { View, Text, Pressable } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import { Linking } from 'react-native'
import { Image } from 'expo-image';
import { getImageByID } from '@/Utils/datafetching';
import { useEffect } from 'react';
import React from 'react'
type Props = {
  name: string
  description: string
  location:string
  category:string
  method:string
  link?: string
  image_id?:string
}

const HalalfoodCard:React.FC<Props> = ({name, description, location, link, image_id, method, category}) => {
  const [image, setImage] = React.useState<string | null>(null)
  if(image_id) {
    useEffect(() => {
      getImageByID(image_id).then((data) => {
        setImage(data.toString())
        console.log(data)
      })
    }, [])
  }
  


  return (
    <View className='flex flex-col w-full  shadow-md shadow-slate-200 justify-between  bg-white rounded-xl px-4 py-2 '>
      <View className=''>
       <Image
        style={{ width: "100%", height: 100, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
        source={ "https://plus.unsplash.com/premium_photo-1677528572912-20b0ef3c08a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  }
      />
      </View>

      <View className='flex flex-row '>
        <Text className="text-lg font-semibold text-[#5636A7]"> {name} </Text>
      </View>
        <View className='flex flex-col justify-between w-full py-4 font-bold'>
            <Text className="text-md  text-gray-600 py-2 ">{description} </Text>
            <Text className="text-md font-semibold text-gray-500">Category: {category} </Text>
            <Text className="text-md font-semibold text-gray-500">Location: {location} </Text>
           <View className='flex flex-row justify-end'>
            {link && <Pressable className="bg-[#5636A7] w-36 p-2  rounded-xl text-center mt-2 flex flex-row items-center justify-center" onPress={() => Linking.openURL(link)}>
                        <Text className="text-white text-center font-semibold ">Order now</Text>
                </Pressable>}
           </View>
        </View>
    </View>
  )
} 

export default HalalfoodCard