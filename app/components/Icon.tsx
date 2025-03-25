import React from "react";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { ReactNode } from 'react'
import { Link } from "expo-router";
interface ButtonProps {
  icon: ReactNode;
  link:string
  text: string;

}




export const IconComponent:React.FC<ButtonProps> = ({icon, link, text}: ButtonProps) => {


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

            className={`items-center w-16 h-16 p-4 text-center shadow-md shadow-slate-200 bg-[#F9FAFB] justify-center  rounded-xl ${isPressed ? "bg-[#ededed]" : "bg-[#F9FAFB]"}`}>
                {icon}
            </Pressable>
          </Link>
          <Text className="my-2 text-center ">{text}</Text>
        </View>
      
    </>
  );
}

export default IconComponent;