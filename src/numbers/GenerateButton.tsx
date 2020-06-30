import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-native";
import { GENERATE_RANDOM_NUMBERS } from "./actions";

export const GenerateButton = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch({ type: GENERATE_RANDOM_NUMBERS });
  };
  return <Button title={"Generate"} onPress={onPress} />;
};
