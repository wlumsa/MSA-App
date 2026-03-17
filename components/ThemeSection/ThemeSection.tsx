import { Sun, Moon, SunMoon } from "lucide-react-native";
import { View, Text } from "react-native";
import { Appearance } from "react-native";
import { RadioListItem } from "./RadioListItem";
type ColorSchemeName = Appearance.AppearancePreferences['colorScheme'];


const ThemeSection = () => {
  return (
    <View className="dark:bg-[#191818] bg-[#F8F5FF]   px-4 py-2 rounded-lg r">
        <Text className="text-textGray dark:text-gray-300  py-2 ">App Theme</Text>
        <View className="p-2 bg-foreground rounded-lg ">
        <RadioListItem
          icon={<SunMoon color={"#9055FF"} />}
          title="Automatic"
          checked={true}
          onPress={() => console.log("clicked")}
        />
        <View className="h-px bg-gray-200 dark:bg-gray-600" />

         <RadioListItem
          icon={<Sun color={"#9055FF"}/>}
          title="Light Mode"
          checked={false}
          onPress={() => console.log("clicked")}
        />
        <View className="h-px bg-gray-200 dark:bg-gray-600" />
         <RadioListItem
          icon={<Moon color={"#9055FF"} />}
          title="Dark Mode"
          checked={false}
          onPress={() => console.log("clicked")}
        />
</View>
    </View>
  )
}

export default ThemeSection
