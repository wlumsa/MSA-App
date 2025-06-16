import React from "react";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { ReactNode } from 'react'
import { Link } from "expo-router";
import { IconButtonProps } from "@/Utils/types";



export const IconComponent:React.FC<IconButtonProps> = ({icon, link, text}: IconButtonProps) => {


    const [isPressed, setIsPressed] = useState(false);
    const onPress = () => {
      setIsPressed(!isPressed);
    };

  

  return (
    <>
      
        <View className="items-center text-center">
          <Link href={link as any} asChild>
            <Pressable
            onPressIn={onPress}
            onPressOut={onPress}

            className={`items-center w-16 h-16 p-4 text-center shadow-md shadow-slate-200 bg-foreground justify-center  rounded-xl ${isPressed ? "bg-[#ededed]" : "bg-[#F9FAFB]"}`}>
                {icon}
            </Pressable>
          </Link>
          <Text className="my-2 text-center text-textPrimary ">{text}</Text>
        </View>
      
    </>
  );
}

export default IconComponent;