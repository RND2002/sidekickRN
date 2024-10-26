import { StyleSheet, View, Text, Button, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/MyButton";
import { authActions } from "../store/authSlice";
import LoginScreen from "./LoginScreen";
import { executeGetUserProfessionService } from "../api/UserApi";
import { useEffect, useState } from "react";
// import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { executeHandleAvailability } from "../api/UserProfessionApi";
import { GlobalStyles } from "../components/styles.js";
import { FontAwesome } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../components/CustomButton.js";
import { professionActions } from "../store/userProfessionSlice.js";
function UserProfileScreen({ navigation }) {
  const [availability, setAvailability] = useState(true);
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(authActions.logout());
    //navigation.navigate('LoginScreen')
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Your Profile",
      headerStyle: {
        backgroundColor: GlobalStyles.colors.buttonColor, // Change the background color
      },
      headerTintColor: "#fff", // Change the text color
      headerTitleStyle: {
        //fontWeight: 'bold', // Optional: change the font style
      },
    });
  }, [navigation]);

  const firstName = useSelector((state) => state.loggedInUser.firstName);
  const lastName = useSelector((state) => state.loggedInUser.lastName);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.loggedInUser.role);
  const [occupation,setOccupation]=useState('')
  const [description,setDescription]=useState('')
  const getUserprofession = async () => {
    try {
      const response = await executeGetUserProfessionService(token);
      if (response.status === 200) {
        setOccupation(response.data.occupation)
        setDescription(response.data.description)
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

  const handleProviderActivity = async () => {
    try {
      const response = await executeHandleAvailability(token);
      if (response.status === 200) {
        setAvailability(!availability);
        console.log("ava"+response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (role === "Provider") {
      getUserprofession(token);
    }
  }, []);

 // const occupation = useSelector((state) => state.loggedInUser.role);
  //   const availability = useSelector( (state) => state.userProfession.availability);
  console.log(firstName);

  return (
    <>
      <View style={styles.cardContainer}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.nayXB8Ej8LjbPEuCR_0a9QHaKf?rs=1&pid=ImgDetMain",
            }} // Replace with your image URL
            style={styles.image}
          />
        </View>

        {/* Service Information */}
        <View style={styles.serviceInfo}>
          <View style={styles.headerRow}>
            <Text style={styles.serviceTitle}>{occupation.toUpperCase()}</Text>
            <View style={styles.iconsRow}>
              <TouchableOpacity>
                <Icon name="share" size={24} color="#000" />
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.iconMargin}>
              <Icon name="bookmark-border" size={24} color="#000" />
            </TouchableOpacity> */}
            </View>
          </View>

          {/* Provider Name and Rating */}
          <View style={styles.providerRow}>
            <Text style={styles.providerName}>
              {firstName + " " + lastName}
            </Text>
            <FontAwesome name="star" size={18} color="red" />
            {/* <Text style={styles.rating}>4.9 (120 Reviews)</Text> */}
          </View>

          {/* Location */}
          <View style={styles.locationRow}>
            <Icon name="location-on" size={18} color="#000" />
            <Text style={styles.locationText}>64 Amborkhana, Sylhet</Text>
          </View>
          {role === "Provider" && (
  <Pressable onPress={handleProviderActivity} style={styles.availabilityButton}>
    {availability ? (
      <>
        <FontAwesome name="check-circle" size={30} color="green" />
        <Text style={styles.availabilityText}> Available</Text>
      </>
    ) : (
      <>
        <FontAwesome name="times-circle" size={30} color="red" />
        <Text style={styles.availabilityText}> Not available</Text>
      </>
    )}
  </Pressable>
)}


          {/* Price */}
          {role==='Provider' &&
          <Text style={styles.priceText}>
          $20 <Text style={styles.perDayText}>(per Day)</Text>
        </Text>}

          {/* About Section */}
          {role==='Provider' &&
          <View style={styles.aboutSection}>
          <Text style={styles.aboutHeading}>About me</Text>
          <Text style={styles.aboutText}>{description}</Text>
          <TouchableOpacity>
            <Text style={styles.readMoreText}>Read More...</Text>
          </TouchableOpacity>
        </View>
          }
        </View>
      </View>
      <View style={styles.logoutView}>
        <CustomButton onPress={logout} title={"Logout"} width={"90%"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 16,
    overflow: "hidden", // To ensure the image and content round together
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: GlobalStyles.colors.outlineButton,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    objectFit: "contain",
  },
  serviceInfo: {
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconsRow: {
    flexDirection: "row",
  },
  iconMargin: {
    marginLeft: 10,
  },
  providerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 5,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff4081",
    marginVertical: 8,
  },
  perDayText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#999",
  },
  aboutSection: {
    marginTop: 12,
  },
  aboutHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 14,
    color: "#666",
  },
  readMoreText: {
    color: "#ff4081",
    marginTop: 4,
  },
  bookButton: {
    //position:"absolute",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  innerButton: {
    //flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutView: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  availabilityButton: {
    flexDirection: 'row',       // Align the icon and text in a row
    justifyContent: 'center',   // Center the content
    alignItems: 'center',       // Vertically center the content
    backgroundColor: GlobalStyles.colors.outlineButton, // Background color for the button
    paddingVertical: 10,        // Vertical padding for the button
    paddingHorizontal: 15,      // Horizontal padding for the button
    borderRadius: 10,           // Rounded corners
    marginVertical: 10,         // Space around the button
  },
  availabilityText: {
    fontSize: 18,              // Size of the text
    marginLeft: 10,            // Space between icon and text
    fontWeight: 'bold',        // Bold text
  },
});

export default UserProfileScreen;
