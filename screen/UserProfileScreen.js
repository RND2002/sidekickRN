import { StyleSheet, View, Text, Button, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/MyButton";
import { authActions } from "../store/authSlice";
import LoginScreen from "./LoginScreen";
import { executeGetUserProfessionService } from "../api/UserApi";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "react-native-vector-icons";
import ProviderCard from "../components/ProviderCard";
import { executeHandleAvailability } from "../api/UserProfessionApi";

function UserProfileScreen({ navigation }) {
    const [availability,setAvailability]=useState(true)
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(authActions.logout());
    //navigation.navigate('LoginScreen')
  };

  const firstName = useSelector((state) => state.loggedInUser.firstName);
  const lastName = useSelector((state) => state.loggedInUser.lastName);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.loggedInUser.role);

  const getUserprofession = async () => {
    try {
      const response = await executeGetUserProfessionService(token);
      if (response.status === 200) {
        const { occupation, experience, description } = response.data;
        console.log(response.data);
        dispatch(
          professionActions.setUserProfession({
            occupation,
            experience,
            description,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProviderActivity=async()=>{
    try{
        const response=await executeHandleAvailability(token)
        if(response.status===200){
            setAvailability(!availability)
            console.log(response.data)
        }
    }catch(error){
        console.log(error)
    }
  }

  useEffect(() => {
    if (role === "Provider") {
      getUserprofession(token);
    }
  }, []);

  const occupation = useSelector((state) => state.loggedInUser.role);
//   const availability = useSelector( (state) => state.userProfession.availability);
  console.log(firstName);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        {/* Circular Image */}
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.oYLH9-ud2bHV36pWwAKMtgHaHC?rs=1&pid=ImgDetMain/150",
          }} // Replace with your image URL
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.providerName}>{firstName + " " + lastName}</Text>
          {role === "Provider" && (
            <Text style={styles.providerName}>{occupation}</Text>
          )}

          {/* Icons and Text Row */}
          <View style={styles.iconsContainer}>
            {/* Star Icon and Value */}
            <View style={styles.iconWithText}>
              <Icon name="star" size={30} color="#FFD700" />
              <Text style={styles.iconText}>3.5</Text>
            </View>

            {/* Job Icon and Values */}
            <View style={styles.iconWithText}>
              <MaterialIcons name="work" size={30} color="#42403f" />
              <Text style={styles.iconText}>40</Text>
            </View>

            {/* Status Icon and Text */}
            <View style={styles.iconWithText}>
              <Pressable onPress={handleProviderActivity}>
              <Icon
                name={availability ? "checkmark-circle" : "close-circle"}
                size={30}
                color={availability==true ? "green" : "red"}
                //onPress={() => setStatus(!availability)} // Toggle status on click
              />
              </Pressable>
              <Text style={styles.iconText}>
                {availability==true ? "Available" : "Busy"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <MyButton onPress={logout} backgroundColor="red" title="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 1,
    borderRadius: 10,
    //shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    // elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    //marginTop:20
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Makes the image circular
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  providerName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#42403f",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // Ensure it takes full width of the container
  },
  iconWithText: {
    alignItems: "center", // Center icon and text vertically
  },
  iconText: {
    marginTop: 5, // Add space between icon and text
    fontSize: 14,
    color: "#42403f",
  },
});

export default UserProfileScreen;
