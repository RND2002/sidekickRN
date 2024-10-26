// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, Alert } from "react-native";
// import MyButton from "../components/MyButton";
// import Input from "../components/Input";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/authSlice";
// import { executeLoginService } from "../api/AuthApi";
// import { executeGetUserDataService } from "../api/UserApi";
// import { userActions } from "../store/userSlice";
// import SignupScreen from "./SignupScreen";
// import { useNavigation } from "@react-navigation/native";

// function LoginScreen({navigation}) {
//  // const navigation = useNavigation();
//   const [loginData, setLoginData] = useState({
//     email: {
//       value: "",
//       isValid: true,
//     },
//     password: {
//       value: "",
//       isValid: true,
//     },
//   });

//   const [token,setToken]=useState('')

//   const dispatch = useDispatch();

//   const handleFormValueChange = (inputIdentifier, enteredValue) => {
//     setLoginData((currLoginData) => {
//       return {
//         ...currLoginData,
//         [inputIdentifier]: { value: enteredValue, isValid: true },
//       };
//     });
//   };

//   const handleSubmit = async () => {
//     const email = loginData.email.value;
//     const password = loginData.password.value;
  
//     // Input validation
//     if (!email || !password) {
//       Alert.alert("Invalid input", "Email and Password cannot be empty");
//       return;
//     }
  
//     try {
//       const response = await executeLoginService({ email, password });
//       if (response.status === 200) {
//         const authToken = response.data.token;
//         setToken(authToken);
//         await storeUserData(authToken); // Pass token to storeUserData
//         dispatch(
//           authActions.login({
//             token: authToken, // only pass the token
//           })
//         );
//       } else {
//         Alert.alert("Login Failed", "Please check your credentials");
//       }
//     } catch (error) {
//       Alert.alert("Login Failed", "An error occurred during login");
//       console.error("Login Error:", error);
//     }
//   };
  
//   const storeUserData = async (token) => {
//     try {
//       const response = await executeGetUserDataService(token);
//       if (response.status === 200) {
//         const { id, firstName, lastName, phone, role, availability } = response.data;
//         dispatch(userActions.setUserData({ id, firstName, lastName, phone, role, availability }));
//       } else {
//         console.error("Failed to fetch user data:", response);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error); // Handle errors
//     }
//   };

//   const handleSignUp = () => {
//     // Navigate to Sign Up screen
//     navigation.navigate('SignupScreen');
//   };

  

//   return (
//     <View style={styles.outerContainer}>
//       <Image source={require("../assets/logo.jpg")} style={styles.logo} />
//       <View style={styles.container}>
//         <Text style={styles.heading}>Log in or Sign up</Text>
//         <Input
//           style={styles.input}
//           label="Enter your email"
//           textInputConfig={{
//             onChangeText: handleFormValueChange.bind(this, "email"),
//             value: loginData.email.value,
//             autoCapitalize:'none'
            
//           }}
//         />
//         <Input
//           label="Password"
//           secureTextEntry={true}
//           textInputConfig={{
//             onChangeText: handleFormValueChange.bind(this, "password"),
//             value: loginData.password.value,
//             autoCapitalize:'none'
//           }}
//         />
//         {/* Connect the handleSubmit function to the button */}
//         <MyButton title="Continue" onPress={handleSubmit} />
//         <MyButton title="Signup" onPress={handleSignUp} />
       
//       </View>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     marginBottom: 20,
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   input: {
//     margin: 10,
//   },
//   container: {},
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain",
//     borderRadius: 25,
//     marginBottom: 10,
//   },
//   heading: {
//     fontWeight: "600",
//     fontSize: 20,
//     marginBottom: 10,
//     color: "black",
//     textAlign: "center",
//   },
// });

// export default LoginScreen;
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { executeLoginService } from "../api/AuthApi";
import { executeGetUserDataService } from "../api/UserApi";
import { userActions } from "../store/userSlice";
import { GlobalStyles } from "../components/styles";
import CustomButton from "../components/CustomButton";

function LoginScreen({ navigation }) {
  const [loginData, setLoginData] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleFormValueChange = (inputIdentifier, enteredValue) => {
    setLoginData((currLoginData) => ({
      ...currLoginData,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  };

  const handleSubmit = async () => {
    const { email, password } = loginData;
    
    if (!email.value || !password.value) {
      Alert.alert("Invalid input", "Email and Password cannot be empty");
      return;
    }
  
    try {
      const response = await executeLoginService({ email: email.value, password: password.value });
      if (response.status === 200) {
        const authToken = response.data.token;
        await storeUserData(authToken);
        dispatch(authActions.login({ token: authToken }));
      } else {
        Alert.alert("Login Failed", "Please check your credentials");
      }
    } catch (error) {
      Alert.alert("Login Failed", "An error occurred during login");
      console.error("Login Error:", error);
    }
  };
  
  const storeUserData = async (token) => {
    try {
      const response = await executeGetUserDataService(token);
      if (response.status === 200) {
        const { id, firstName, lastName, phone, role, availability } = response.data;
        dispatch(userActions.setUserData({ id, firstName, lastName, phone, role, availability }));
      } else {
        console.error("Failed to fetch user data:", response);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.outerContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.jpg")} style={styles.logo} />
          <Text style={styles.heading}>Welcome Back</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            style={styles.input}
            label="Email"
            icon="mail-outline"
            textInputConfig={{
              onChangeText: handleFormValueChange.bind(this, "email"),
              value: loginData.email.value,
              autoCapitalize: 'none',
              keyboardType: 'email-address',
            }}
          />
          <Input
            label="Password"
            icon="lock-closed-outline"
            secureTextEntry={!showPassword}
            textInputConfig={{
              onChangeText: handleFormValueChange.bind(this, "password"),
              value: loginData.password.value,
              autoCapitalize: 'none',
            }}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="#666" />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <CustomButton width={"100%"} title="Log In" onPress={handleSubmit} />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor:"white"
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    backgroundColor: GlobalStyles.colors.outlineButton,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderRadius: 60,
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#4c669f',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#333',
  },
  signupLink: {
    color: '#4c669f',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import MyButton from "../components/MyButton";
// import Input from "../components/Input";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/authSlice";
// import { executeLoginService } from "../api/AuthApi";
// import { executeGetUserDataService } from "../api/UserApi";
// import { userActions } from "../store/userSlice";
// import CustomButton from "../components/CustomButton";

// function LoginScreen({ navigation }) {
//   const [loginData, setLoginData] = useState({
//     email: { value: "", isValid: true },
//     password: { value: "", isValid: true },
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();

//   const handleFormValueChange = (inputIdentifier, enteredValue) => {
//     setLoginData((currLoginData) => ({
//       ...currLoginData,
//       [inputIdentifier]: { value: enteredValue, isValid: true },
//     }));
//   };

//   const handleSubmit = async () => {
//     const { email, password } = loginData;
    
//     if (!email.value || !password.value) {
//       Alert.alert("Invalid input", "Email and Password cannot be empty");
//       return;
//     }
  
//     try {
//       const response = await executeLoginService({ email: email.value, password: password.value });
//       if (response.status === 200) {
//         const authToken = response.data.token;
//         await storeUserData(authToken);
//         dispatch(authActions.login({ token: authToken }));
//       } else {
//         Alert.alert("Login Failed", "Please check your credentials");
//       }
//     } catch (error) {
//       Alert.alert("Login Failed", "An error occurred during login");
//       console.error("Login Error:", error);
//     }
//   };
  
//   const storeUserData = async (token) => {
//     try {
//       const response = await executeGetUserDataService(token);
//       if (response.status === 200) {
//         const { id, firstName, lastName, phone, role, availability } = response.data;
//         dispatch(userActions.setUserData({ id, firstName, lastName, phone, role, availability }));
//       } else {
//         console.error("Failed to fetch user data:", response);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <LinearGradient
//       colors={['#4a90e2', '#63a4ff', '#1976d2']}
//       style={styles.gradient}
//     >
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.outerContainer}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.logoContainer}>
//             <Image source={require("../assets/logo.jpg")} style={styles.logo} />
//             <Text style={styles.heading}>Welcome Back</Text>
//             <Text style={styles.subheading}>Log in to your account</Text>
//           </View>
//           <View style={styles.formContainer}>
//             <Input
//               style={styles.input}
//               //label="Email"
//               icon="mail-outline"
//               textInputConfig={{
//                 onChangeText: handleFormValueChange.bind(this, "email"),
//                 value: loginData.email.value,
//                 autoCapitalize: 'none',
//                 keyboardType: 'email-address',
//                 placeholder: "Enter your email",
//               }}
//             />
//             <Input
//               style={styles.input}
//               //label="Password"
//               icon="lock-closed-outline"
//               secureTextEntry={!showPassword}
//               textInputConfig={{
//                 onChangeText: handleFormValueChange.bind(this, "password"),
//                 value: loginData.password.value,
//                 autoCapitalize: 'none',
//                 placeholder: "Enter your password",
//               }}
//               rightIcon={
//                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                   <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="#666" />
//                 </TouchableOpacity>
//               }
//             />
//             <TouchableOpacity style={styles.forgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>
//             <CustomButton width={"100%"} title="Log In" onPress={handleSubmit} style={styles.loginButton} />
//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//                 <Text style={styles.signupLink}>Sign Up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   outerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   contentContainer: {
//     width: '100%',
//     maxWidth: 400,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   formContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//     borderRadius: 20,
//     padding: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 8,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain",
//     borderRadius: 50,
//     marginBottom: 15,
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 28,
//     marginBottom: 5,
//     color: "white",
//     textAlign: "center",
//   },
//   subheading: {
//     fontSize: 16,
//     color: "rgba(255, 255, 255, 0.8)",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     marginVer: 20,
//     borderWidth:1,
//     borderRadius:10,
//     height:40
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     marginBottom: 25,
//   },
//   forgotPasswordText: {
//     color: '#1976d2',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   loginButton: {
//     backgroundColor: '#1976d2',
//     borderRadius: 10,
//     paddingVertical: 12,
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 25,
//   },
//   signupText: {
//     color: '#333',
//   },
//   signupLink: {
//     color: '#1976d2',
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;