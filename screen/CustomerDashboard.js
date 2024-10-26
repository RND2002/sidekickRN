
import { Pressable, FlatList, StyleSheet, Text, View, Alert } from "react-native";
import HeaderNavigation from "../components/HeaderNavigation";
import ServiceCard from "../components/ServiceCard";
import ProviderCard from "../components/ProviderCard";
import MostPopularServices from "../components/MostPopularServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deviceLocationActions } from '../store/locationSlice';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  Accuracy,
} from 'expo-location';
import { getAddress } from "../util/location";
import CustomHeader from "../components/CustomHeader";

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
  const [pickedLocation, setPickedLocation] = useState();
  const dispatch = useDispatch();

  // Get Location and Address (simplified for brevity)
  useEffect(() => {
    const getLocationHandler = async () => {
      // Permissions and Location fetching logic
      const location = await getCurrentPositionAsync({accuracy: Accuracy.High,});
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    };

    getLocationHandler();
  }, []);

  useEffect(() => {
    if (pickedLocation) {
      const fetchAddress = async () => {
        const addressData = await getAddress(pickedLocation.lat, pickedLocation.lng);
        dispatch(deviceLocationActions.setDeviceLocation({
          village: addressData.village,
          district: addressData.city,
          pincode: addressData.postcode,
          displayName: addressData.display_name,
          stateIn: addressData.state
        }));
      };
      fetchAddress();
    }
  }, [pickedLocation]);

  const displayAddress = useSelector((state) => state.deviceLocation.displayName);

  // Handle Service Press
  const handleServicePress = (serviceId, serviceName) => {
    navigation.navigate('ServiceByNameScreen', { serviceId, serviceName });
  };

  // Render Service Cards
  const renderServiceCard = ({ item }) => (
    <ServiceCard
      title={item.title}
      image={item.image}
      onPress={() => handleServicePress(item.id, item.serviceName)}
    />
  );

  return (
    <View style={styles.container}>
      <CustomHeader />

      <FlatList
        data={quickHouseWorks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderServiceCard}
        ListHeaderComponent={() => (
          <>
            <HeaderNavigation />
            <MostPopularServices />
            <View style={styles.sliderContainer}>
              <Text style={styles.cardContainer}>Most Popular Services</Text>
              <FlatList
                data={popularServices}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderServiceCard}
                contentContainerStyle={styles.horizontalScrollViewContent}
              />
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.providerCardContainer}>
            <Text style={styles.cardContainer}>Last Month's Star</Text>
            <ProviderCard style={styles.providerCard} />
            <ProviderCard style={styles.providerCard} />
          </View>
        )}
        contentContainerStyle={styles.scrollViewContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  sliderContainer: {
    marginTop: 20,
    height: 220,
  },
  providerCardContainer: {
    marginVertical: 20,
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
