import { View, Text, ScrollView } from 'react-native'
import { ChevronLeft, ChevronRight, Calendar, Sunrise, Moon, Sunset, Sun } from "lucide-react-native"
import { Pressable } from 'react-native'
import PrayerCard from '../components/PrayerCard/PrayerCard'
import React from 'react'
import PrayerTiming from '../components/PrayerTiming/PrayerTiming'
import { getPrayerTimingsForDay } from '@/Utils/api'
import { useQuery } from '@tanstack/react-query'
const prayertimes = () => {
    const formmattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })


    const {data: prayertimes, isLoading, error} = useQuery({
    queryKey: ['prayertimes'],
     queryFn: getPrayerTimingsForDay,
   })

   if (isLoading) return (
    <View className='h-screen px-6 pt-4 bg-[#F8F5FF] items-center justify-center'>
      <Text className='text-lg mx-4'>Loading prayer times...</Text>
    </View>
  )
    if (error) return (
    <View className='h-screen px-6 pt-4 bg-[#F8F5FF] items-center justify-center'>
      <Text className='text-lg mx-4'>Error loading prayer times</Text>
    </View>
    )
  return (
        <ScrollView className='flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] '>
         
            <View className="items-center p-2 rounded-xl bg-base-200 mb-2 " >
                <View className="flex flex-row items-center justify-between w-full bg-white rounded-xl ">
                    <Pressable className="px-4">
                        <ChevronLeft color={"#5636A7"} size={32} />
                    </Pressable>
                    <View className="flex flex-col items-center justify-center py-4  rounded-xl">
                        <Text className="text-lg font-bold text-[#2e046d]">28 Jumada 1446 </Text>
                        <Text className="text-md text-[#2e046d]">{formmattedDate}</Text>

                    </View>

                    <Pressable className="px-4">
                        <ChevronRight color={"#5636A7"} size={32} />
                    </Pressable>
                </View>
            </View>
            <View>
                <PrayerCard />
            </View>
            <View className='flex flex-col w-full  mt-8 bg-[#F8F5FF] '>
              <View className="flex flex-row justify-between w-full px-4 ">
                  <Text className=" text-lg font-bold">Prayer</Text>
                  <View className="flex flex-row gap-16 font-medium">
                      <Text className="text-lg ">Athan</Text>
                      <Text className="text-lg ">Iqama</Text>
                  </View>

              </View>
              <View className="flex flex-col">
                <PrayerTiming
                name="Fajr"
                athan={prayertimes?.fajr + " AM"}
                iqama="N/A"
                icon={<Sunrise color="#9055FF" strokeWidth={2.5} />}
                 />
                <PrayerTiming
                name="Dhuhr"
                athan={prayertimes?.dhuhr + " PM"}
                iqama="N/A"
                icon={<Sun color="#9055FF" strokeWidth={2.5} />}
                 />
                <PrayerTiming
                name="Asr"
                athan={prayertimes?.asr+ " PM"}
                iqama="N/A"
                icon={<Sunrise color="#9055FF" strokeWidth={2.5} />}
                 />
                <PrayerTiming
                name="Maghrib"
                athan={prayertimes?.maghrib+ " PM"}
                iqama="N/A"
                icon={<Sunset color="#9055FF" strokeWidth={2.5} />}
                 />
                <PrayerTiming
                name="Isha"
                athan={prayertimes?.isha +  " PM"}
                iqama="N/A"
                icon={<Moon color="#9055FF" strokeWidth={2.5} />}  
                  />
              
              </View>
            </View>
     
      </ScrollView>
    
  )
}

export default prayertimes


