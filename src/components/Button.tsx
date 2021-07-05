import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface AlfaButtonProps {
  onPress: () => void;
  label: string;
}

export const AlfaButtonStyles = StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: "blueviolet",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const AlfaButton: React.FC<AlfaButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={AlfaButtonStyles.container}>
        <Text style={AlfaButtonStyles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AlfaButton;
