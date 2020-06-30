import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  view: {
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 12,
  },
  text: {
    fontSize: 30,
  },
});

export const RandomNumber: React.FC<{ value: number }> = ({ value }) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>{value}</Text>
    </View>
  );
};
