import { Text, View } from "react-native";
import getReminderId from "@/Utils/utils";
import { getDailyReminder } from "@/Utils/api";
import { useState, useEffect } from "react";
import { Reminder } from "@/Utils/types";
import { useQuery } from "@tanstack/react-query";
const reminderId =  getReminderId();

const AyahCard = () => {
  const highlightPhrases = [
    "We have indeed established you",
    "seldom give any thanks",
  ];

  const renderHighlighted = (text: string) => {
    if (!text) return null;
    // Simple highlighter: split by phrases and reassemble with bold spans
    let remaining = text;
    const elements: React.ReactNode[] = [];
    let key = 0;
    while (remaining.length > 0) {
      let earliestIndex = -1;
      let matched = "";
      for (const phrase of highlightPhrases) {
        const idx = remaining.indexOf(phrase);
        if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
          earliestIndex = idx;
          matched = phrase;
        }
      }
      if (earliestIndex === -1) {
        elements.push(
          <Text key={`t-${key++}`} style={{ fontFamily: 'Inter' }}>{remaining}</Text>
        );
        break;
      }
      if (earliestIndex > 0) {
        elements.push(
          <Text key={`t-${key++}`} style={{ fontFamily: 'Inter' }}>
            {remaining.slice(0, earliestIndex)}
          </Text>
        );
      }
      elements.push(
        <Text key={`b-${key++}`} style={{ fontFamily: 'Inter-Bold' }}>{matched}</Text>
      );
      remaining = remaining.slice(earliestIndex + matched.length);
    }
    return elements;
  };
  async function fetchReminder() {
   return await getDailyReminder(reminderId)

  }
  const {data: ayah , isLoading, error} = useQuery({
    queryKey: ['ayah'],
    queryFn: fetchReminder,
  })



  if (isLoading) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full'>
      <Text className="card-title text-primary text-left pb-2" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 22, marginBottom: 4 }}>
          Daily Reminder
        </Text>

        <Text className="card-text text-textPrimary py-2 justify-end " style={{ fontFamily: 'Inter', fontSize: 16 }}>
        Loading...     </Text>

    </View>
  )
  if (error) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-slate-50 shadow-md shadow-slate-200 p-6 w-full'>
    <Text className="card-title text-[#2E046D] text-left pb-2" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 22, marginBottom: 4 }}>
        Daily Reminder
      </Text>

      <Text className="card-text text-gray-700 py-2 justify-end " style={{ fontFamily: 'Inter', fontSize: 16 }}>
      Error loading reminder     </Text>

  </View>
  )
  if (!ayah) return (
    <View className='flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full'>
    <Text className="card-title text-[#2E046D] text-left pb-2" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 22, marginBottom: 4 }}>
        Daily Reminder
      </Text>

      <Text className="card-text text-gray-700 py-2 justify-end " style={{ fontFamily: 'Inter', fontSize: 16 }}>
      No data found     </Text>

  </View>
  )



  return (
    <View className="flex flex-col rounded-xl my-4 justify-start text-start bg-foreground shadow-md shadow-slate-200 p-6 w-full ">
        <Text className="card-title text-primary text-left pb-2" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 22, marginBottom: 4 }}>
          Daily Reminder
        </Text>
        <Text className="card-text text-textPrimary py-2 justify-end " style={{ fontFamily: 'Amiri', fontSize: 20, lineHeight: 34, textAlign: 'center', writingDirection: 'rtl' as any }}>
          {ayah.arabic}
        </Text>
        <Text className="card-text text-textPrimary py-2 justify-end " style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 24, marginTop: 6 }}>
        {renderHighlighted(ayah.english)}         </Text>
         <Text className="card-text text-gray-400 pt-2" style={{ fontFamily: 'Inter', fontSize: 13, fontStyle: 'italic', marginTop: 6 }}>
         {ayah.reference}
         </Text>
      </View>
  )
}

export default AyahCard
