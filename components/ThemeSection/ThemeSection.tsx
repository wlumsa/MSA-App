import { Sun, Moon, SunMoon } from "lucide-react-native";
import { View, Text } from "react-native";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { RadioListItem } from "./RadioListItem";

type ThemePreference = 'system' | 'light' | 'dark';

const ThemeSection = () => {
  const { setColorScheme } = useColorScheme();
  const [preference, setPreference] = useState<ThemePreference>('system');

  const handleThemeChange = (pref: ThemePreference) => {
    setPreference(pref);
    setColorScheme(pref);
  };

  return (
    <View className="dark:bg-[#191818] bg-[#F8F5FF] px-4 py-2 rounded-lg">
      <Text className="text-textGray dark:text-gray-300 py-2">App Theme</Text>
      <View className="p-2 bg-foreground rounded-lg">
        <RadioListItem
          icon={<SunMoon color={"#9055FF"} />}
          title="Automatic"
          checked={preference === 'system'}
          onPress={() => handleThemeChange('system')}
        />
        <View className="h-px bg-gray-200 dark:bg-gray-600" />
        <RadioListItem
          icon={<Sun color={"#9055FF"} />}
          title="Light Mode"
          checked={preference === 'light'}
          onPress={() => handleThemeChange('light')}
        />
        <View className="h-px bg-gray-200 dark:bg-gray-600" />
        <RadioListItem
          icon={<Moon color={"#9055FF"} />}
          title="Dark Mode"
          checked={preference === 'dark'}
          onPress={() => handleThemeChange('dark')}
        />
      </View>
    </View>
  );
}

export default ThemeSection
