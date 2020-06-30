import * as React from "react";
import { Text, View } from "react-native";
import { useLogs } from "./LogsProvider";

type LogType = ReturnType<typeof useLogs>[0];

export const LogItem: React.FC<{ value: LogType; index: number }> = ({
  value,
  index,
}) => {
  return (
    <View>
      <Text>
        {index}. number1: {value.number1}, number2: {value.number2}, number3:{" "}
        {value.number3}
      </Text>
    </View>
  );
};
