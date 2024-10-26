// import React from "react";
// import { View, TextInput, StyleSheet, Dimensions } from "react-native";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { GlobalStyles } from "./styles";
// // import Colors from '../components/Colors';

// // Get window dimensions
// const { width, height } = Dimensions.get("window");

// function InputSearch({
//   placeholder = "Search....",
//   value,
//   onChangeText,
//   keyboardType = "default",
//   secureTextEntry = false,
//   style = {},
//   placeholderTextColor = "black", // Custom placeholder color
//   ...props
// }) {
//   return (
//     <View style={[styles.container, style]}>
//      <FontAwesome name="search" size={24} color="black" />
//       <TextInput
//         style={[
//           styles.input,
//           {
//             width: width * 0.85, // Adjust width based on screen size
//             height: height * 0.05, // Adjust height based on screen size
//           },
//         ]}
//         placeholder={placeholder}
//         placeholderTextColor={placeholderTextColor} // Set placeholder color
//         value={value}
//         onChangeText={onChangeText}
//         keyboardType={keyboardType}
//         secureTextEntry={secureTextEntry}
//         {...props}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row", // Make the icon and input in one row
//     alignItems: "center",
//     borderColor: "gray",
//     backgroundColor: "white",
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingLeft: 10,
//     // justifyContent:"spa"
    
    
//   },
//   icon: {
//     marginRight: 16,
//     paddingHorizontal:20 // Spacing between icon and input
//   },
//   input: {
//     flex: 1, // Take up remaining space
//     color: "black", // Input text color
//     fontSize: 18, // Input font size
//     fontWeight: "450", // Set font weight for input text
//   },
// });

// export default InputSearch;
import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Get window dimensions
const { width, height } = Dimensions.get("window");

function InputSearch({
  placeholder = "Search....",
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
      <FontAwesome name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={[styles.input, {
          width: width * 0.85, // Adjust width based on screen size
          height: height * 0.05, // Adjust height based on screen size
        }]}
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
    flexDirection: "row", // Align icon and input horizontally
    alignItems: "center",
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10, // Add horizontal padding
    justifyContent: "space-between", // Space out icon and input
  },
  icon: {
    marginRight: 10, // Space between icon and input
  },
  input: {
    flex: 1, // Take up remaining space
    color: "black", // Input text color
    fontSize: 18, // Input font size
    fontWeight: "450", // Set font weight for input text
  },
});

export default InputSearch;
