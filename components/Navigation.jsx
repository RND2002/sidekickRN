import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from 'react-native-vector-icons';
import { GlobalStyles } from "./styles";

function Navigation() {
  const [status, setStatus] = useState(true); // true for available, false for busy

  return (
    <View style={styles.cardContainer}>
      {/* Circular Image */}
      
      
       

        {/* Icons and Text Row */}
        <View style={styles.iconsContainer}>
          {/* Star Icon and Value */}
          <View style={styles.iconWithText}>
            <Icon name="home" size={30} color="black" />
            
          </View>

          {/* Job Icon and Values */}
          <View style={styles.iconWithText}>
            <MaterialIcons name="search" size={30}  color="black" />
            
          </View>
          <View style={styles.iconWithText}>
            <MaterialIcons name="shopping-cart" size={30} color="black" />
            {/* <Text>Plumber</Text> */}
          </View>

          {/* Status Icon and Text */}
          <View style={styles.iconWithText}>
            <Icon
              name={status ? "settings" : "close-circle"}
              size={30}
              color={status ? "black" : "red"}
              onPress={() => setStatus(!status)} // Toggle status on click
            />
           
          </View>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    //borderWidth:1,
    padding: 15,
    marginLeft:6,
    marginRight:6,
    //marginVertical: 5,
    //marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    //shadowOpacity: 0.1,
    //shadowRadius: 10,
    //elevation: 5,
    // marginTop:20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    
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

export default Navigation;
