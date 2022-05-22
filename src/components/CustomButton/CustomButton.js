import { View, Text, StyleSheet, Pressable } from "react-native";
import React from 'react';

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.Text,
          styles[`Text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 30,
  },
  container_PRIMARY: {
    backgroundColor: "#0067FF",
  },

  container_SECONDARY: {
    borderColor: "#0067FF",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  Text: {
    fontWeight: "bold",
    color: "#fff",
  },

  Text_TERTIARY: {
    color: "gray",
  },
  Text_SECONDARY: {
    color: "#0067FF",
  },
});
export default CustomButton;
