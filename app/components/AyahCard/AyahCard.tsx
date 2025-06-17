import { Text, View } from "react-native";
import getReminderId from "@/Utils/utils";
import { getDailyReminder } from "@/Utils/api";
import { useState, useEffect } from "react";
import { Reminder } from "@/Utils/types";
import { useQuery } from "@tanstack/react-query";
const reminderId =  getReminderId();

const AyahCard = () => {
  async function fetchReminder() {
   return await getDailyReminder(reminderId) 
    
  }
  const {data: ayah , isLoading, error} = useQuery({
    queryKey: ['ayah'],
    queryFn: fetchReminder,  
  })



  if (isLoading) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full'>
      <Text className="card-title text-primary text-left pb-2">
          Daily Reminder
        </Text>
        
        <Text className="card-text text-textPrimary py-2 justify-end ">
        Loading...     </Text>   
         
    </View>
  )
  if (error) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-slate-50 shadow-md shadow-slate-200 p-6 w-full'>
    <Text className="card-title text-[#2E046D] text-left pb-2">
        Daily Reminder
      </Text>
      
      <Text className="card-text text-gray-700 py-2 justify-end ">
      Error loading reminder     </Text>   
       
  </View>
  )
  if (!ayah) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full'>
    <Text className="card-title text-[#2E046D] text-left pb-2">
        Daily Reminder
      </Text>
      
      <Text className="card-text text-gray-700 py-2 justify-end ">
      No data found     </Text>   
       
  </View>
  )


  
  return (
    <View className="flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full ">
        <Text className="card-title text-primary text-left pb-2">
          Daily Reminder
        </Text>
        <Text className="card-text text-textPrimary py-2 justify-end ">
          {ayah.arabic}
        </Text>
        <Text className="card-text text-textPrimary py-2 justify-end ">
        {ayah.english}         </Text>   
         <Text className="card-text text-gray-400 pt-2">
         {ayah.reference}
         </Text>
      </View>
  )
}

export default AyahCard