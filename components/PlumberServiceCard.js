import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Star, Bookmark } from 'lucide-react';

const PlumbingServiceCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '/api/placeholder/100/100' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Plumbing Services</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color="#FFD700" fill="#FFD700" />
          <Text style={styles.rating}>4.8 (320 Reviews)</Text>
        </View>
        <Text style={styles.price}>$50</Text>
      </View>
      <TouchableOpacity style={styles.bookmarkButton}>
        <Bookmark size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    maxWidth: 400,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  bookmarkButton: {
    padding: 8,
  },
};

export default PlumbingServiceCard;