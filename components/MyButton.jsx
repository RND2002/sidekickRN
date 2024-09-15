import { View, Pressable, Text, StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function MyButton({
  title = "Submit",
  onPress,
  backgroundColor = "blue",
  textColor = "white",
  
  fontWeight = "500",
  buttonWidth = width * 0.866, // Default to 90% of screen width
  buttonHeight = height * 0.04, // Default to 6% of screen height
  borderRadius = 10,
  rippleColor = "#42403f",
}) {
  return (
    <View style={[styles.div, { backgroundColor, borderRadius }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: rippleColor }}
        style={({ pressed }) => [
          {
            opacity: pressed && Platform.OS === "ios" ? 0.7 : 1,
          },
          styles.button,
          {
            width: buttonWidth, // Adjust width based on screen size
            height: buttonHeight, // Adjust height based on screen size
          },
        ]}
      >
        <View>
        <Text style={[styles.text, { color: textColor, fontWeight }]}>
          {title}
        </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    padding: 8,
    margin: 8,
    alignItems: "center", // Center the button horizontally
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Apply borderRadius here for consistency
  },
  text: {
    textAlign: "center",
    fontSize:19
  },
});

export default MyButton;
