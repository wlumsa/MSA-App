
import Animated, {FadeIn } from "react-native-reanimated";
import { useFocusEffect } from "expo-router";
import { Children } from "react";
import { useCallback, useState } from "react";
import { useColorScheme } from "nativewind"
import type { ReactNode } from 'react';

import {LightTheme, DarkTheme} from '@/Utils/themeOptions';


export  function Screen({ children }: { children: ReactNode }) {
    const { colorScheme } = useColorScheme();
    const [key, setKey] = useState(0);
    const content = Children.toArray(children).filter(
      (child) => !(typeof child === "string" && child.trim() === "")
    );

    useFocusEffect(
      useCallback(() => {
        setKey((prevKey) => prevKey + 1);
      }, [])
    );
    const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <Animated.View
    style={{
      flex: 1,
      backgroundColor: theme.colors.background ,
    }}
    key={key}
    entering={FadeIn}
  >
{content}
    </Animated.View>
  );
}
