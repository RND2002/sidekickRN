import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../components/Colors';

// Get window dimensions
const { width, height } = Dimensions.get("window");

function InputSearch({
  placeholder = "Enter text",
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  style = {},
  placeholderTextColor = "black", // Custom placeholder color
  ...props
}) {
  return (
    <View style={[styles.container, style]}>
     <FontAwesome name="search" size={24} color="black" />
      <TextInput
        style={[
          styles.input,
          {
            width: width * 0.85, // Adjust width based on screen size
            height: height * 0.06, // Adjust height based on screen size
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor} // Set placeholder color
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Make the icon and input in one row
    alignItems: "center",
    borderColor: "gray",
    backgroundColor: Colors.bgfloor,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    
    
  },
  icon: {
    marginRight: 16, // Spacing between icon and input
  },
  input: {
    flex: 1, // Take up remaining space
    color: "black", // Input text color
    fontSize: 18, // Input font size
    fontWeight: "450", // Set font weight for input text
  },
});

export default InputSearch;
