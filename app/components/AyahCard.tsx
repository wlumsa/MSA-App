import { Text, View } from "react-native";
import getReminderId from "@/Utils/utils";
import { getDailyReminder } from "@/Utils/datafetching";
import { useState, useEffect } from "react";
import { Reminder } from "@/Utils/types";
const reminderId =  getReminderId();

const AyahCard = () => {
  const [ayah, setAyah] = useState<Reminder>()
 
    useEffect(() => {
    getDailyReminder(reminderId).then((data) => {
      setAyah(data)
    })
  }, [])



  
  return (
    <View className="flex flex-col rounded-xl my-4 justify-start text-start bg-slate-50 shadow-md shadow-slate-200 p-6 w-full ">
        <Text className="card-title text-[#2E046D] text-left pb-2">
          Daily Reminder
        </Text>
        <Text className="card-text text-gray-700 py-2 justify-end ">
          {ayah?.arabic}
        </Text>
        <Text className="card-text text-gray-700 py-2 justify-end ">
        {ayah?.english}         </Text>   
         <Text className="card-text text-gray-400 pt-2">
         {ayah?.reference}
         </Text>
      </View>
  )
}

export default AyahCard