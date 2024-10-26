// // import React from "react";
// // import { View, Text, StyleSheet, Pressable } from "react-native";
// // import { MaterialIcons, MaterialCommunityIcons, Octicons } from "react-native-vector-icons";
// // import { useNavigation } from "@react-navigation/native";

// // function HeaderNavigation() {
// //   const navigation = useNavigation(); // Get the navigation object

// //   // Function to handle navigation with service name and ID
// //   const handleNavigation = (serviceId, serviceName) => {
// //     navigation.navigate("ServiceByNameScreen", {
// //       serviceId: serviceId,
// //       serviceName: serviceName,
// //     });
// //   };

// //   return (
// //     <View style={styles.cardContainer}>
// //       <View style={styles.iconsContainer}>
// //         {/* Hair Icon */}
// //         <Pressable onPress={() => handleNavigation(1, "Hair")}>
// //           <View style={styles.iconWithText}>
// //             <MaterialCommunityIcons name="hair-dryer-outline" size={30} color="black" />
// //             <Text>Hair</Text>
// //           </View>
// //         </Pressable>

// //         {/* Plumber Icon */}
// //         <Pressable onPress={() => handleNavigation(2, "Plumber")}>
// //           <View style={styles.iconWithText}>
// //             <MaterialIcons name="plumbing" size={30} color="black" />
// //             <Text>Plumber</Text>
// //           </View>
// //         </Pressable>

// //         {/* Dry Cleaning Icon */}
// //         <Pressable onPress={() => handleNavigation(3, "Dry Cleaning")}>
// //           <View style={styles.iconWithText}>
// //             <MaterialIcons name="dry-cleaning" size={30} color="black" />
// //             <Text>Dry Cleaning</Text>
// //           </View>
// //         </Pressable>

// //         {/* Electrician Icon */}
// //         <Pressable onPress={() => handleNavigation(4, "Electrician")}>
// //           <View style={styles.iconWithText}>
// //             <Octicons name="plug" size={30} color="black" />
// //             <Text>Electrician</Text>
// //           </View>
// //         </Pressable>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   cardContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     padding: 15,
// //   },
// //   iconsContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     width: "100%",
// //   },
// //   iconWithText: {
// //     alignItems: "center",
// //   },
// // });

// // export default HeaderNavigation;
// // import { useNavigation } from '@react-navigation/native';
// // import React from 'react';
// // import { StyleSheet, Text, View, Image, Pressable, FlatList, Alert } from 'react-native';

// // // Dummy service data array
// // const services = [
// //   { id: 1, name: 'Hair', image: 'https://via.placeholder.com/50' },
// //   { id: 2, name: 'Plumber', image: 'https://via.placeholder.com/50' },
// //   { id: 3, name: 'Dry Cleaning', image: 'https://via.placeholder.com/50' },
// //   { id: 4, name: 'Electrician', image: 'https://via.placeholder.com/50' },
// // ];

// // // Main component that renders the list of services directly
// // export default function HeaderNavigation() {

// //     const navigation = useNavigation(); // Get the navigation object

// //   // Function to handle navigation with service name and ID
// //   const handleNavigation = (serviceId, serviceName) => {
// //     navigation.navigate("ServiceByNameScreen", {
// //       serviceId: serviceId,
// //       serviceName: serviceName,
// //     });
// //   };
// //   // Function to handle card press
// //   const handlePress = (id, name) => {
// //     Alert.alert(`Service Selected`, `You clicked on ${name} (ID: ${id})`);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={services}
// //         keyExtractor={(item) => item.id.toString()} // Use the id as key
// //         renderItem={({ item }) => (
// //           <Pressable 
// //             style={({ pressed }) => [
// //               styles.card,
// //               { opacity: pressed ? 0.8 : 1 } // Provides feedback on press
// //             ]}
// //             onPress={() => handlePress(item.id, item.name)}
// //           >
// //             {/* Icon/Image */}
// //             <Image
// //               source={{ uri: item.image }} // Use the image from the service object
// //               style={styles.icon}
// //             />
// //             {/* Text Label */}
// //             <Text style={styles.label}>{item.name}</Text>
// //           </Pressable>
// //         )}
// //         numColumns={3} // Display two cards per row
// //         contentContainerStyle={styles.flatListContent}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#f5f5f5',
// //   },
// //   flatListContent: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   card: {
// //     width: 100,
// //     height: 100,
// //     backgroundColor: 'white',
// //     borderRadius: 15,
// //     borderColor: '#e6e6e6', // Light gray border
// //     borderWidth: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3, // For Android shadow
// //     margin: 10, // Add margin to space out cards
// //   },
// //   icon: {
// //     width: 50,
// //     height: 50,
// //     marginBottom: 5,
// //   },
// //   label: {
// //     fontSize: 12,
// //     color: '#808080', // Light gray text
// //     textAlign: 'center',
// //   },
// // });

// import React from 'react';
// import { View, Text, StyleSheet, Pressable, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// // Dummy service data array
// const tap=require('../assets/waterTap.png')
// const electricity=require('../assets/electricity.png')
// const cleaning=require('../assets/cleaning.png')
// const hair=require('../assets/hair.png')
// const clothes=require('../assets/clothes.png')
// const carpenter=require('../assets/carpenter.png')
// const services = [
//   { id: 1, name: 'Hair', image:hair },
//   { id: 2, name: 'Plumber', image: tap },
//   { id: 3, name: 'Dry Cleaning', image: clothes },
//   { id: 4, name: 'Electrician', image: electricity },
//   { id: 5, name: 'Cleaning', image: cleaning },
//   { id: 6, name: 'Carpentry', image: carpenter },
// ];

// export default function HeaderNavigation() {
//   const navigation = useNavigation(); // Get the navigation object

  
//   // Function to handle navigation with service name and ID
//   const handleNavigation = (serviceId, serviceName) => {
//     navigation.navigate("ServiceByNameScreen", {
//       serviceId: serviceId,
//       serviceName: serviceName,
//     });
//   };

//   // Function to handle card press
//   const handlePress = (id, name) => {
//     Alert.alert(`Service Selected`, `You clicked on ${name} (ID: ${id})`);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         {services.map(item => (
//           <Pressable
//             key={item.id}
//             style={({ pressed }) => [
//               styles.card,
//               { opacity: pressed ? 0.8 : 1 } // Provides feedback on press
//             ]}
//             onPress={() => handlePress(item.id, item.name)}
//           >
//             {/* Icon/Image */}
//             <Image
//               source={item.image} // Use the image from the service object
//               style={styles.icon}
//             />
//             {/* Text Label */}
//             <Text style={styles.label}>{item.name}</Text>
//           </Pressable>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height:200,
//     padding: 10,
    

//     //justifyContent: 'center',
//     //alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//    // justifyContent: 'center',
//   },
//   card: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 15,
//     borderColor: '#e6e6e6', // Light gray border
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3, // For Android shadow
//     margin: 10, // Add margin to space out cards
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   label: {
//     fontSize: 12,
//     color: '#808080', // Light gray text
//     textAlign: 'center',
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Alert, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { executeGetProfessionByCategoryService } from '../api/UserProfessionApi';

// Import images from asset folder
const tap = require('../assets/waterTap.png');
const electricity = require('../assets/electricity.png');
const cleaning = require('../assets/cleaning.png');
const hair = require('../assets/hair.png');
const clothes = require('../assets/clothes.png');
const carpenter = require('../assets/carpenter.png');

// Dummy service data array
const services = [
  { id: 1, name: 'Hair', image: hair },
  { id: 2, name: 'Plumber', image: tap },
  { id: 3, name: 'Dry Cleaning', image: clothes },
  { id: 4, name: 'Electrician', image: electricity },
  { id: 5, name: 'Cleaning', image: cleaning },
  { id: 6, name: 'Carpentry', image: carpenter },
];

// Get window dimensions
const { width } = Dimensions.get('window');

// Function to determine the number of items per row based on screen width
const getItemsPerRow = () => {
  if (width >= 768) {
    // Tablet screens (e.g., iPad)
    return 4;
  }
  // Mobile screens
  return 3;
};

// Calculate card size
const cardSize = width / getItemsPerRow() - 20; // 20 is for margin and padding

export default function HeaderNavigation() {
  const navigation = useNavigation(); // Get the navigation object
  const [content,setContent]=useState([])
  // Function to handle navigation with service name and ID
  const handleNavigation = (serviceId, serviceName) => {
    navigation.navigate('ServiceByIconScreen', {
      serviceId: serviceId,
      serviceName: serviceName,
    });
  };

  

  // Function to handle card press
  // const handlePress = (id, name) => {
  //   Alert.alert(`Service Selected`, `You clicked on ${name} (ID: ${id})`);
  // };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Most Used Services</Text>
      <View style={styles.cardContainer}>
        {services.map((item) => (
          <Pressable
            
            key={item.id}
            style={({ pressed }) => [
              styles.card,
              { opacity: pressed ? 0.8 : 1, width: cardSize, height: cardSize } // Adjust card size
            ]}
            onPress={() => handleNavigation(item.id, item.name)}
          >
            {/* Icon/Image */}
            <Image
              source={item.image} // Use the image from the service object
              style={styles.icon}
              resizeMode="contain" // Ensure image fits within the bounds of the card
            />
            {/* Text Label */}
            <Text style={styles.label}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  heading:{
    marginLeft: 12,
    fontWeight: "500",
    fontSize: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#e6e6e6', // Light gray border
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
    margin: 5, // Add margin to space out cards
  },
  icon: {
    width: '80%',
    height: '70%',
  },
  label: {
    fontSize: 12,
    color: '#808080', // Light gray text
    textAlign: 'center',
  },
});
