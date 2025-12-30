import { ReactNode } from 'react';
import { Pressable, Text} from "react-native";
import { Row, Spacer, useExpoTheme, View } from 'expo-dev-client-components';

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  title: string;
  checked?: boolean;
};

export function RadioListItem({ onPress, icon, title, checked }: Props) {
  const theme = useExpoTheme();

  return (
    <Pressable onPress={onPress}>
      <Row
        align="center"
        justify="between"
        padding="medium"
        className="bg-foreground rounded-lg "
      >
        <Row align="center">
          {icon}
          {icon ? <Spacer.Horizontal size="small" /> : null}
          <Text
            className="text-textGray dark:text-gray-300 text-md "
          >
            {title}
          </Text>
        </Row>
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            margin: 8,
            borderWidth: 1,
            borderColor: theme.icon.secondary,
          }}
          align="centered"
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
      </Row>
    </Pressable>
  );
}