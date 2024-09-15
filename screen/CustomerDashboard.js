
import { Pressable, ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import HeaderNavigation from "../components/HeaderNavigation";
import ServiceCard from "../components/ServiceCard";
import Navigation from "../components/Navigation";
import { useLayoutEffect, useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ProviderCard from "../components/ProviderCard";
import { useDispatch } from "react-redux";
import {deviceLocationActions} from '../store/locationSlice'
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  Accuracy,
} from 'expo-location';
import { getAddress } from "../util/location";
import { useSelector } from "react-redux";
// Data for popular services
const popularServices = [
  { id: 1, title: 'Fridge', image: require('../assets/fridge.jpeg'), serviceName: 'Fridge Repair' },
  { id: 2, title: 'AC Repair', image: require('../assets/ac.jpg'), serviceName: 'AC Repair' },
  { id: 3, title: 'Television', image: require('../assets/tv.jpg'), serviceName: 'TV Repair' },
  { id: 4, title: 'Water Purifier', image: require('../assets/waterPurifier.jpeg'), serviceName: 'Water Purifier Repair' }
];

// Data for quick house works
const quickHouseWorks = [
  { id: 5, title: 'Inverter', image: require('../assets/inverter.jpeg'), serviceName: 'Inverter Repair' },
  { id: 6, title: 'Fan Repair', image: require('../assets/fan.jpg'), serviceName: 'Fan Repair' },
  { id: 7, title: 'Switch and Board', image: require('../assets/switch.jpeg'), serviceName: 'Switch Repair' },
  { id: 8, title: 'Tap Repair', image: require('../assets/tap.jpeg'), serviceName: 'Tap Repair' }
];

function CustomerDashboard({ navigation }) {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  // Handle service selection
  const handleServicePress = (serviceId, serviceName) => {
    console.log(`Service Pressed: ID = ${serviceId}, Name = ${serviceName}`);
    navigation.navigate('ServiceByNameScreen', { serviceId, serviceName });
  };

  const handleProfileIconClick = () => {
    navigation.navigate('UserProfileScreen');
    console.log("Profile Icon Clicked");
  };

  // Request location permission and get location
  const verifyPermissions = async () => {
    // Check if locationPermissionInformation is null or undefined
    if (!locationPermissionInformation) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // Check for undetermined permissions
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // Handle denied permissions
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      const location = await getCurrentPositionAsync({accuracy: Accuracy.High,});
      console.log('Location:', location); // Handle the location data as needed
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      console.log('Error fetching location:', error);
    }
  };

  
  useEffect(() => {
    getLocationHandler();
    
  }, []);

  // useEffect(()=>{
  //   if(pickedLocation){
  //     const addressString= getAddress(pickedLocation.lat,pickedLocation.lng)
  //     console.log(addressString)
  //   }
    
  // },[])

  const dispatch=useDispatch()
  useEffect(() => {
    if (pickedLocation) {
      const fetchAddress = async () => {
        try {
          const addressData = await getAddress(pickedLocation.lat, pickedLocation.lng);
          dispatch(deviceLocationActions.setDeviceLocation({
            village: addressData.village,
            district: addressData.state_district,
            pincode: addressData.postcode,
            displayName: addressData.display_name,
            stateIn: addressData.state
          }));
        } catch (error) {
          console.log('Error fetching address:', error);
        }
      };

      fetchAddress();
    }
  }, [pickedLocation]);

  
  const displayAddress=useSelector((state)=>state.deviceLocation.displayName)
  console.log(displayAddress)
  // Set up profile icon in the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleProfileIconClick} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="user-circle" size={26} color="black" />
          {displayAddress && <Text style={{ marginLeft: 8 }}>{displayAddress}</Text>}
        </Pressable>
      ),
      headerLeft: () => (
        <Pressable style={{ marginLeft: 16 }}>
          {displayAddress && <Text>{displayAddress}</Text>}
        </Pressable>
      ),
    });
  }, [navigation, displayAddress]);
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderNavigation />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Most Popular Services */}
        <View style={styles.sliderContainer}>
          <Text style={styles.cardContainer}>Most Popular Services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollViewContent}
          >
            {popularServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                onPress={() => handleServicePress(service.id, service.serviceName)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Quick House Works */}
        <View style={styles.sliderContainer}>
          <Text style={styles.cardContainer}>Quick House Works</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollViewContent}
          >
            {quickHouseWorks.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                onPress={() => handleServicePress(service.id, service.serviceName)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Last Month's Star */}
        <View style={styles.providerCardContainer}>
          <Text style={styles.cardContainer}>Last Month's Star</Text>
          <ProviderCard style={styles.providerCard} />
          <ProviderCard style={styles.providerCard} />
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      {/* <Navigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 50, // Ensures the content scrolls all the way down
  },
  sliderContainer: {
    marginTop: 20,
    height: 220, // Adjusted height to ensure the cards fit well
  },
  providerCardContainer: {
    marginVertical: 20, // Add some margin around the provider card section
  },
  providerCard: {
    marginTop: 10,
  },
  cardContainer: {
    marginLeft: 24,
    fontWeight: "500",
    fontSize: 20,
  },
  horizontalScrollViewContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default CustomerDashboard;
