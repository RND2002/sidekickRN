import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, Octicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

function HeaderNavigation() {
  const navigation = useNavigation(); // Get the navigation object

  // Function to handle navigation with service name and ID
  const handleNavigation = (serviceId, serviceName) => {
    navigation.navigate("ServiceByNameScreen", {
      serviceId: serviceId,
      serviceName: serviceName,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconsContainer}>
        {/* Hair Icon */}
        <Pressable onPress={() => handleNavigation(1, "Hair")}>
          <View style={styles.iconWithText}>
            <MaterialCommunityIcons name="hair-dryer-outline" size={30} color="black" />
            <Text>Hair</Text>
          </View>
        </Pressable>

        {/* Plumber Icon */}
        <Pressable onPress={() => handleNavigation(2, "Plumber")}>
          <View style={styles.iconWithText}>
            <MaterialIcons name="plumbing" size={30} color="black" />
            <Text>Plumber</Text>
          </View>
        </Pressable>

        {/* Dry Cleaning Icon */}
        <Pressable onPress={() => handleNavigation(3, "Dry Cleaning")}>
          <View style={styles.iconWithText}>
            <MaterialIcons name="dry-cleaning" size={30} color="black" />
            <Text>Dry Cleaning</Text>
          </View>
        </Pressable>

        {/* Electrician Icon */}
        <Pressable onPress={() => handleNavigation(4, "Electrician")}>
          <View style={styles.iconWithText}>
            <Octicons name="plug" size={30} color="black" />
            <Text>Electrician</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconWithText: {
    alignItems: "center",
  },
});

export default HeaderNavigation;
