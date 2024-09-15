import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import MyButton from "../components/MyButton";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { executeLoginService } from "../api/AuthApi";
import { executeGetUserDataService } from "../api/UserApi";
import { userActions } from "../store/userSlice";
import SignupScreen from "./SignupScreen";
import { useNavigation } from "@react-navigation/native";

function LoginScreen({navigation}) {
 // const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  });

  const [token,setToken]=useState('')

  const dispatch = useDispatch();

  const handleFormValueChange = (inputIdentifier, enteredValue) => {
    setLoginData((currLoginData) => {
      return {
        ...currLoginData,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const handleSubmit = async () => {
    const email = loginData.email.value;
    const password = loginData.password.value;
  
    // Input validation
    if (!email || !password) {
      Alert.alert("Invalid input", "Email and Password cannot be empty");
      return;
    }
  
    try {
      const response = await executeLoginService({ email, password });
      if (response.status === 200) {
        const authToken = response.data.token;
        setToken(authToken);
        await storeUserData(authToken); // Pass token to storeUserData
        dispatch(
          authActions.login({
            token: authToken, // only pass the token
          })
        );
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
      console.error("Error fetching user data:", error); // Handle errors
    }
  };

  const handleSignUp = () => {
    // Navigate to Sign Up screen
    navigation.navigate('SignupScreen');
  };

  

  return (
    <View style={styles.outerContainer}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.heading}>Log in or Sign up</Text>
        <Input
          style={styles.input}
          label="Enter your email"
          textInputConfig={{
            onChangeText: handleFormValueChange.bind(this, "email"),
            value: loginData.email.value,
            autoCapitalize:'none'
            
          }}
        />
        <Input
          label="Password"
          secureTextEntry={true}
          textInputConfig={{
            onChangeText: handleFormValueChange.bind(this, "password"),
            value: loginData.password.value,
            autoCapitalize:'none'
          }}
        />
        {/* Connect the handleSubmit function to the button */}
        <MyButton title="Continue" onPress={handleSubmit} />
        <MyButton title="Signup" onPress={handleSignUp} />
       
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    margin: 10,
  },
  container: {},
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 25,
    marginBottom: 10,
  },
  heading: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    color: "black",
    textAlign: "center",
  },
});

export default LoginScreen;
