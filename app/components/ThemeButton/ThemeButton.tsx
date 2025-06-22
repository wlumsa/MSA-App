import React from 'react'
import { Pressable } from 'react-native'
import { View, Text } from 'react-native'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react'
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  useEffect(() => {
  console.log('Theme changed to:', theme);
}, [theme]);

  return (
   <View className='my-4'>
        <Pressable
        onPress={toggleTheme}
        className="p-4 bg-foreground rounded-lg shadow-md">
        <Text className="dark:text-white text-black text-center">
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </Text>
        </Pressable>
   </View>
  )
}

export default ThemeButton