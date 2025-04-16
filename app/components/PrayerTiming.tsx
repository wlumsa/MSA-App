import { View, Text } from 'react-native'
import React from 'react'
import { Sunrise } from 'lucide-react-native'
import { Prayer } from '@/Utils/types'

const PrayerTiming:React.FC<Prayer> = ({icon, name, athan, iqama}: Prayer) => {
  return (
    <View className="flex flex-row justify-between w-full p-6 rounded-xl bg-white my-2 ">
            <View className="flex flex-row gap-4">
                {icon}
                <Text className="text-lg text-bold font-bold">{name}</Text>
             </View>
                    <View className="flex flex-row gap-8 ">
                        <Text className="text-lg text-gray-500 font-bold">{athan}</Text>
                        <Text className="text-lg font-bold text-[#2e046d]">{iqama}</Text>
                    </View>
                </View>
  )
}

export default PrayerTiming