import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from 'react-native-vector-icons';
import MyButton from "./MyButton";

function ProviderCard({id,userId,name,profession,availability}) {
  const [status, setStatus] = useState(true); // true for available, false for busy

  return (
    <View style={styles.cardContainer}>
      {/* Circular Image */}
      <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.oYLH9-ud2bHV36pWwAKMtgHaHC?rs=1&pid=ImgDetMain/150" }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.infoContainer}>
      <Text style={styles.providerName}>{name}</Text>
      {/* <Text style={styles.providerName}>{profession}</Text> */}

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
            <Icon
              name={availability==true ? "checkmark-circle" : "close-circle"}
              size={30}
              color={availability==true ? "green" : "red"}
              onPress={() => setStatus(!status)} // Toggle status on click
            />
            <Text style={styles.iconText}>
              {availability==true ? "Available" : "Busy"}
            </Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderWidth:1,
   // elevation: 5,
    marginLeft:10,
    marginRight:10
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
  bookServiceButton:{
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius:20,
    width:40
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

export default ProviderCard;
