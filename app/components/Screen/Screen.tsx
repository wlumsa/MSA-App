
import Animated, {FadeIn } from "react-native-reanimated";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { useColorScheme } from "nativewind"
const {colorScheme, setColorScheme} = useColorScheme();
import type { ReactNode } from 'react';

import {LightTheme, DarkTheme} from '@/Utils/themeOptions';


export function Screen({ children }: { children: ReactNode }) {
    const [key, setKey] = useState(0);

    useFocusEffect(
      useCallback(() => {
        setKey((prevKey) => prevKey + 1);
      }, [])
    );
    const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <Animated.View
    style={{
    
      backgroundColor: theme.colors.background ,
    }}
    key={key}
    entering={FadeIn}
  >
{children}
    </Animated.View>
  );
}
