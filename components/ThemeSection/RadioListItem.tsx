import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  title: string;
  checked?: boolean;
};

export function RadioListItem({ onPress, icon, title, checked }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View className="bg-foreground rounded-lg flex-row items-center justify-between px-4 py-3">
        <View className="flex-row items-center">
          {icon}
          {icon ? <View className="w-2" /> : null}
          <Text
            className="text-textGray dark:text-gray-300 text-md "
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            margin: 8,
            borderWidth: 1,
            borderColor: "#9CA3AF",
          }}
          className="items-center justify-center"
        >
          {checked ? (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 10,
                backgroundColor: "#9055FF",
              }}
            />
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}
