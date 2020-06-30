import * as React from "react";
import { Text } from "react-native";

export const RandomNumber: React.FC<{ value: number }> = ({ value }) => {
  return <Text>{value}</Text>;
};
