import React from "react";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import AlfaButton from "../src/components/Button";

export default {
  title: "Button",
};

const style = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const alfaButton = () => (
  <View style={style}>
    <AlfaButton label="Alfabeto test button" onPress={action("clicked")} />
  </View>
);

// On-Device Register
storiesOf("Button", module).add("AlfaButton", alfaButton);
