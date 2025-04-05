import { View, Text } from 'react-native'
import React from 'react'
import { Sunrise } from 'lucide-react-native'

type PrayerProps = {
  name: string
  athan: string
  iqama: string
  icon: React.ReactNode
}

const PrayerTiming:React.FC<PrayerProps> = ({icon, name, athan, iqama}: PrayerProps) => {
  return (
    <View className="flex flex-row justify-between w-full p-6 rounded-xl bg-white my-2 ">
            <View className="flex flex-row gap-4">
                {icon}
                 {/* <Sunrise color="#9055FF" strokeWidth={2.5} /> */}
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