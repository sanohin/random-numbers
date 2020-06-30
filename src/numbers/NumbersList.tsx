import * as React from "react";
import { View } from "react-native";
import { useSelector } from "../store/useSelector";
import { RandomNumber } from "./RandomNumber";

export const NumbersList = () => {
  const number1 = useSelector((state) => state.number1);
  const number2 = useSelector((state) => state.number2);
  const number3 = useSelector((state) => state.number3);
  return (
    <View>
      <RandomNumber value={number1} />
      <RandomNumber value={number2} />
      <RandomNumber value={number3} />
    </View>
  );
};
