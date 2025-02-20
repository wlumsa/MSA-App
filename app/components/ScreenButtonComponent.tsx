import React from "react";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { ReactNode } from 'react'
import { ChevronRight } from "lucide-react-native";
import { router } from "expo-router";

interface ButtonProps {
  icon: ReactNode;
  screenName:string
  text?: string;
  navigation: any;
  state: any;
  lastItem?: boolean;
}


export const ScreenButtonComponent:React.FC<ButtonProps> = ({icon, screenName, text, navigation, state, lastItem}: ButtonProps) => {
    const isCurrentScreen = state.routeNames[state.index] === screenName;
    

    const [isPressed, setIsPressed] = useState(false);
    const onPress = () => {
      setIsPressed(!isPressed);
    };

  
  return (
    <Pressable
      onPressIn={onPress}
      onPressOut={onPress}
      onPress={() => router.push(screenName as any)}
      className={`flex-row items-center gap-4 p-4 justify-between ${
        (isCurrentScreen|| isPressed) ? 'bg-[#ededed] rounded-xl' : ''
      } ${!lastItem ? "border-b border-gray-200 ": "" } `}
    >
      <View className={`flex-row items-center gap-4`}>
        {icon} 
        <Text className={`text-[#696573] text-md`}>{text}</Text> 
      </View>
      <ChevronRight size={20} color="#5636A7" strokeWidth={2.5} />
    </Pressable>
  );
}

export default ScreenButtonComponent;