import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLogs } from "./LogsProvider";

type LogType = ReturnType<typeof useLogs>[0];

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  current: {
    color: "#d32f2f",
    textDecorationLine: "underline",
  },
});

export const LogItem: React.FC<{ value: LogType; isCurrent: boolean }> = ({
  value,
  isCurrent,
}) => {
  return (
    <View>
      <Text style={[styles.text, isCurrent && styles.current]}>
        {value.number1} {value.number2} {value.number3}
      </Text>
    </View>
  );
};
