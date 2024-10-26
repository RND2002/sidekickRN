

// // export default SignupScreen;
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import Input from '../components/Input';
// import MyButton from '../components/MyButton';

// const SignupScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');

//   function goToLoginPage(){
//     navigation.navigate('LoginScreen')
//   }

//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.container}>
//         <Image source={require('../assets/logo.jpg')} style={styles.logo} />
//         <Text style={styles.heading}>Sign Up</Text>
//         <View style={styles.nameContainer}>
//           <Input
//             style={styles.nameBox}
//             label="First Name"
//             value={firstName}
//             placeholder="First name"
//             onChangeText={(text) => setFirstName(text)}
//           />
//           <Input
//             label="Last Name"
//             value={lastName}
//             placeholder="Last name"
//             onChangeText={(text) => setLastName(text)}
//             style={styles.nameBox}
//           />
//         </View>
//         <Input
//           label="Email"
//           value={email}
//           placeholder="Enter your email"
//           onChangeText={(text) => setEmail(text)}
//           keyboardType="email-address"
//           autoCapitalize="none"
//           style={styles.input}
//         />
//         <Input
//           label="Phone"
//           value={phone}
//           placeholder="Enter your Contact Number"
//           onChangeText={(text) => setPhone(text)}
//           keyboardType="phone-pad"
//           autoCapitalize="none"
//           style={styles.input}
//         />
//         <Input
//           label="Password"
//           value={password}
//           placeholder="Enter your password"
//           onChangeText={(text) => setPassword(text)}
//           secureTextEntry
//           style={styles.input}
//         />
//         <MyButton title="Sign Up" style={styles.button} />
//         <View style={styles.loginContainer}>
//           <Text style={styles.loginText}>Already have an account?</Text>
//           <MyButton
//             title="Log In"
//             style={styles.button}
//             onPress={goToLoginPage}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//    // backgroundColor: '#f5f5f5', // Light background color
//   },
//   container: {
//     width: "85%",
//     padding: 20,
//     borderRadius: 10,
//     //backgroundColor: '#ffffff', // White background for the form
//     //shadowColor: "#000",
//     // shadowOffset: { width: 0, height: 4 },
//     // shadowOpacity: 0.2,
//     // shadowRadius: 10,
//     // elevation: 5,
//     alignItems: "center",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 28,
//     marginBottom: 20,
//     color: "#333", // Darker text color for contrast
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   nameBox: {
//     width: '48%',
//   },
//   input: {
//     width: '100%',
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     marginTop: 20,
//     backgroundColor: '#007BFF', // Primary color for buttons
//   },
//   loginContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   loginText: {
//     color: '#007BFF', // Color for login text
//     marginBottom: 10,
//   },
// });

// export default SignupScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import { GlobalStyles } from '../components/styles';
import CustomButton from '../components/CustomButton';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  function goToLoginPage(){
    navigation.navigate('LoginScreen')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up to Sidekick</Text>
        <View style={styles.formContainer}>
          <View style={styles.nameContainer}>
            <Input
              style={[styles.input, styles.nameBox]}
              label="First Name"
              value={firstName}
              placeholder="First name"
              onChangeText={(text) => setFirstName(text)}
            />
            <Input
              style={[styles.input, styles.nameBox]}
              label="Last Name"
              value={lastName}
              placeholder="Last name"
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <Input
            style={styles.input}
            label="Email"
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            
          />
          <Input
            style={styles.input}
            label="Phone"
            value={phone}
            placeholder="Enter your Contact Number"
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
          <Input
            style={styles.input}
            label="Password"
            value={password}
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <CustomButton width={"100%"} title="Sign Up" style={styles.button} />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <CustomButton 
          
          backgroundColor={GlobalStyles.colors.outlineButton}
          textColor={"black"}
            title="Log In"
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
            onPress={goToLoginPage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white", // Blue background color
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 30,
    color: GlobalStyles.colors.buttonColor, // White text color
  },
  formContainer: {
    width: "100%",
    backgroundColor: GlobalStyles.colors.outlineButton,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameBox: {
    width: '48%',
  },
  input: {
    marginBottom: 15,
    //borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: GlobalStyles.colors.buttonColor, // Yellow accent color
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#ffffff',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: GlobalStyles.colors.outlineButton,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  loginButtonText: {
    color: '#ffffff',
  },
});

export default SignupScreen;