// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { GlobalStyles } from './styles';

// const CustomButton = ({ title, width, height, onPress,backgroundColor,textColor }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, { width: width || 200, height: height || 50 }]}
//       onPress={onPress}
      
//     >
//       <Text style={styles.text}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: GlobalStyles.colors.buttonColor, // Custom purple color
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 12, // Adjust as needed for rounded corners
//   },
//   text: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CustomButton;
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from './styles';

const CustomButton = ({ title, width, height, onPress, backgroundColor, textColor,borderWidth }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width || 200,
          height: height || 50,
          backgroundColor: backgroundColor || GlobalStyles.colors.buttonColor,
          borderWidth:borderWidth|| null 
        }
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || 'white' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12, // Adjust as needed for rounded corners
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
