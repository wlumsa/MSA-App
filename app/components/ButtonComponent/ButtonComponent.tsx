import React from "react";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { ReactNode } from 'react'
import { ChevronRight } from "lucide-react-native";
import { Linking } from "react-native";
import { ButtonProps } from "@/Utils/types";




export const ButtonComponent:React.FC<ButtonProps> = ({icon, type, link, text, lastItem}: ButtonProps) => {


    const [isPressed, setIsPressed] = useState(false);
    const onPress = () => {
      setIsPressed(!isPressed);
    };

  
  return (
    <>
      {type === "1" && (
        <View className="items-center text-center">
          <Pressable
          onPressIn={onPress}
          onPressOut={onPress}
          onPress={() => Linking.openURL(link)}
          className={`items-center w-14 h-14 p-4 text-center shadow-md shadow-slate-200 bg-foreground rounded-xl ${isPressed ? "bg-[#ededed]" : "bg-[#F9FAFB]"}`}>    
            {icon}
          </Pressable>
        </View>
      )}
      {type === "2" && (
         <Pressable  
         onPressIn={onPress} 
         onPressOut={onPress} 
         className="pt-2"
      
         onPress= { () => Linking.openURL(link)}>
           <View className={`flex-row items-center  p-4  justify-between ${
          isPressed ? 'bg-[#ededed] dark:bg-gray-700 rounded-xl' : ''
      } `}>
          <View className="flex flex-row items-center  ">
            <View className="mr-4">
            {icon}
            </View>
             <Text className=" text-[#696573] dark:text-gray-300 text-md max-w-[90%] ">{text}</Text>
          </View>
           
             <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
            </View>
            
            <View className={`${!lastItem ? "border-b border-gray-200  dark:border-gray-600 py-1 ": "" }`}>
            </View>
         </Pressable> 
      )}  
    </>
  );
}

export default ButtonComponent;