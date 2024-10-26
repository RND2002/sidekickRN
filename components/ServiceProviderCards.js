import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For star and bookmark icons
import { useNavigation } from '@react-navigation/native';

const ServiceProviderCards = ({ id,userId,name,profession,availability }) => {
  const navigation = useNavigation();
  console.log(availability)
  function handleProfileCardClick() {
    console.log("clicked")
    navigation.navigate('ProviderProfile', { userId: userId });
  }
  return (
    <Pressable onPress={handleProfileCardClick}>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-100.jpg?w=1800' }} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.providerName}>{name}</Text>
        <Text style={styles.serviceName}>{profession.toUpperCase()}</Text>

        <Text style={styles.price}>$20 </Text>

        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={18} color="red" />
          <Text style={styles.rating}>4.9 (120 Reviews)</Text>
        </View>
      </View>

      {/* <TouchableOpacity style={styles.bookmarkIcon}>
        <FontAwesome name="bookmark" size={24} color="red" />
      </TouchableOpacity> */}
      {availability===true ? (
        <FontAwesome name="check-circle" size={20} color="green" /> // Green check for available
      ) : (
        <FontAwesome name="times-circle" size={20} color="red" /> // Red cross for offline
      )}
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal:10
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  providerName: {
    fontSize: 14,
    color: '#8b8b8b',
    marginBottom: 2,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#A4008E',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#8b8b8b',
  },
  bookmarkIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServiceProviderCards;
