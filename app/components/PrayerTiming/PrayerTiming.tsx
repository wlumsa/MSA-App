import { View, Text } from 'react-native'
import React from 'react'
import { Sunrise } from 'lucide-react-native'
import { Prayer } from '@/Utils/types'

const PrayerTiming:React.FC<Prayer> = ({icon, name, athan, iqama, isLastItem}: Prayer) => {
  return (
    <View className={`flex flex-row justify-between w-full p-6 bg-foreground items-center  border-gray-300 ${isLastItem ? 'rounded-b-lg' : 'border-b'}`}>
            <View className="flex flex-row gap-4 items-center  ">
                <View className='rounded-full bg-purple-100 p-2'>
                    {icon}
                </View>
                <Text className="text-lg text-bold font-bold text-textPrimary">{name}</Text>
             </View>
                    <View className="flex flex-row gap-8 ">
                        <Text className="text-lg text-textGray font-bold">{athan}</Text>
                        <Text className="text-lg font-bold text-primary">{iqama}</Text>
                    </View>
                </View>
  )
}

export default PrayerTiming