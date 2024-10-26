// import { StyleSheet, Text } from "react-native"
// import { View } from "react-native"
// import { GlobalStyles } from "./styles"

// function CustomHeader(){

//     return (
//         <View style={styles.container} >
//             <Text>Hello</Text>
//             <Text>Hello</Text>
//             <Text>Hello</Text>

//         </View>
//     )

// }

// const styles=StyleSheet.create({
//     container:{
//         height: 150,
//     backgroundColor: GlobalStyles.colors.headerColor, // Custom color
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     justifyContent: 'space-between',
//     }
// })

// export default CustomHeader
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { GlobalStyles } from './styles'; // Assuming you have GlobalStyles
import Input from './Input';
import InputSearch from './InputSeach';
import { useSelector } from 'react-redux';

function CustomHeader() {
    const firstName=useSelector((state)=>state.loggedInUser.firstName)
    const lastName=useSelector((state)=>state.loggedInUser.lastName)

    const address=useSelector((state)=>state.deviceLocation.displayName)
    
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfo}>
        {/* User Avatar */}
        
        <View style={styles.userDetails}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.oYLH9-ud2bHV36pWwAKMtgHaHC?rs=1&pid=ImgDetMain/150' }} // Replace with actual image URL
          style={styles.avatar}
        />
          <Text style={styles.userName}>{firstName+" "+lastName}  👋</Text>
         
        </View>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
      <Text style={styles.userLocation}>{address}</Text>
      {/* Icons on the right side */}
      {/* <View style={styles.iconsContainer}> */}
        
        {/* <Ionicons name="menu" size={24} color="white" style={styles.menuIcon} /> */}
      {/* </View> */}

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        {/* <Ionicons name="search" size={18} color="#6c6c6c" /> */}
        {/* <Text style={styles.searchText}>Search...</Text>
        <Ionicons name="filter" size={18} color="white" style={styles.filterIcon} /> */}
        <InputSearch/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 200,
    backgroundColor: GlobalStyles.colors.headerColor, // Custom color
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
   // marginTop:22
  },
  userInfo: {
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
    //marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems:"center"
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  userLocation: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  menuIcon: {
    marginLeft: 15,
  },
  searchContainer: {
    marginLeft:15,
    marginBottom:10
  },
  searchText: {
    color: '#6c6c6c',
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  filterIcon: {
    backgroundColor: '#f9d66e',
    padding: 5,
    borderRadius: 50,
  },
});

export default CustomHeader;
