// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Input from '../components/Input';
// import MyButton from '../components/MyButton';

// const SignupScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');

//   return (
//     <View style={styles.outerContainer}>
//           <View style={styles.container}>
//       <View style={styles.appBox}>
//         <Text style={styles.heading}>Sidekick</Text>
//       </View>
//       <View style={styles.nameContainer}>
//         <Input
//           style={styles.nameBox}
//           label="First Name"
//           value={firstName}
//           placeholder="First name"
//           onChangeText={(text) => setFirstName(text)}
          
//         />
//         <Input
//           label="Last Name"
//           value={lastName}
//           placeholder="Last name"
//           onChangeText={(text) => setLastName(text)}
//           style={styles.nameBox}
//         />
//       </View>
//       <Input
//         label="Email"
//         value={email}
//         placeholder="Enter your email"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         style={styles.input}
//       />
//       <Input
//         label="Phone"
//         value={phone}
//         placeholder="Enter your Contact Number"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="number"
//         autoCapitalize="none"
//         style={styles.input}
//       />
//       <Input
//         label="Password"
//         value={password}
//         placeholder="Enter your password"
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//         style={styles.input}
//       />
//       <MyButton title="Signup"/>
//       <MyButton style={styles.signupButton} width="80%" title="Already have an account?"/>
//     </View>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     // flex: 1,
//      justifyContent: "center",
//      alignItems: "center",
//    },
//   container: {
//     height: "75%", // 75% of the screen height
//     width: "80%", // 80% of the screen width
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "40%",
//     borderRadius: 10,
//     padding: 20,
//     // shadowColor: "#000",
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.3,
//     // shadowRadius: 4,
//     // elevation: 5,
//     //backgroundColor: "#f3fafd",
//   },
//   nameContainer: {
//     flexDirection:'row',
//   },
//   nameBox:{
//     width:'47%'
//   },
//   heading: {
//     fontWeight: "600",
//     fontSize: 30,
//     marginBottom: 20,
//     color:"blue"
//   },
  
  
// });

// export default SignupScreen;
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

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
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.nameContainer}>
          <Input
            style={styles.nameBox}
            label="First Name"
            value={firstName}
            placeholder="First name"
            onChangeText={(text) => setFirstName(text)}
          />
          <Input
            label="Last Name"
            value={lastName}
            placeholder="Last name"
            onChangeText={(text) => setLastName(text)}
            style={styles.nameBox}
          />
        </View>
        <Input
          label="Email"
          value={email}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <Input
          label="Phone"
          value={phone}
          placeholder="Enter your Contact Number"
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
          autoCapitalize="none"
          style={styles.input}
        />
        <Input
          label="Password"
          value={password}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <MyButton title="Sign Up" style={styles.button} />
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <MyButton
            title="Log In"
            style={styles.button}
            onPress={goToLoginPage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: '#f5f5f5', // Light background color
  },
  container: {
    width: "85%",
    padding: 20,
    borderRadius: 10,
    //backgroundColor: '#ffffff', // White background for the form
    //shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 5,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
    color: "#333", // Darker text color for contrast
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nameBox: {
    width: '48%',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#007BFF', // Primary color for buttons
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#007BFF', // Color for login text
    marginBottom: 10,
  },
});

export default SignupScreen;
