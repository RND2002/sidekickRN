import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons like share, favorite
import { FontAwesome } from '@expo/vector-icons'; // For rating star icon
import { GlobalStyles } from './styles';
import { executeGetProviderDataById } from '../api/UserProfessionApi';
import { useSelector } from 'react-redux';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProviderProfile = ({route,navigation}) => {
    const [providerData,setProviderData]=useState({
        occupation:'',
        fullName:'',
        description:'',
        available:'',
        experience:''

    })
    const userId=route.params.userId
    const token=useSelector((state)=>state.auth.token)
    console.log(userId)
    const getProviderData=async()=>{
       try{
        const response=await executeGetProviderDataById(userId,token)
        console.log(response.data)
        if(response.status===200){
            setProviderData(response.data)
        }
       }catch(error){
        console.log(error)
       }
        
    }
    useEffect(()=>{
        getProviderData()
    },[userId])

    //const navigation=useNavigation()
    

    function handleBookServicePress(){
        navigation.navigate('AddressScreen',{providerId:userId})
    }
  return (
    <>
    <View style={styles.cardContainer}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.nayXB8Ej8LjbPEuCR_0a9QHaKf?rs=1&pid=ImgDetMain' }} // Replace with your image URL
          style={styles.image}
        />
      </View>

      {/* Service Information */}
      <View style={styles.serviceInfo}>
        <View style={styles.headerRow}>
          <Text style={styles.serviceTitle}>{providerData.occupation.toUpperCase()}</Text>
          <View style={styles.iconsRow}>
            <TouchableOpacity>
              <Icon name="share" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconMargin}>
              <Icon name="bookmark-border" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Provider Name and Rating */}
        <View style={styles.providerRow}>
          <Text style={styles.providerName}>{providerData.fullName}</Text>
          <FontAwesome name="star" size={18} color="red" />
          <Text style={styles.rating}>4.9 (120 Reviews)</Text>
        </View>

        {/* Location */}
        <View style={styles.locationRow}>
          <Icon name="location-on" size={18} color="#000" />
          <Text style={styles.locationText}>64 Amborkhana, Sylhet</Text>
        </View>
        {providerData.available ? (
            <>
        <FontAwesome name="check-circle" size={20} color="green" />
        <Text> Available</Text>
        </> // Green check for available
      ) : (
        <>
        <FontAwesome name="times-circle" size={20} color="red" /><Text>Not available</Text>
        </> // Red cross for offline
      )}

        {/* Price */}
        <Text style={styles.priceText}>$20 <Text style={styles.perDayText}>(per Day)</Text></Text>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutHeading}>About me</Text>
          <Text style={styles.aboutText}>
            {providerData.description}
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMoreText}>Read More...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
   <View style={styles.bookButton}>
   {/* <View style={styles.innerButton}> */}
        <CustomButton title={"Call"} 
        backgroundColor={GlobalStyles.colors.outlineButton} 
        borderWidth={1} 
        textColor={"black"}
        width={"40%"}
        />
        <CustomButton title={"Book Service"} onPress={handleBookServicePress} width={"40%"}/>
    {/* </View> */}
   </View>
    </>
  );
};

export default ProviderProfile;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 16,
    overflow: 'hidden', // To ensure the image and content round together
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: GlobalStyles.colors.outlineButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    objectFit:'contain'
  },
  serviceInfo: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconsRow: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 10,
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  providerName: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  locationText: {
    fontSize: 14,
    marginLeft: 5,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff4081',
    marginVertical: 8,
  },
  perDayText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#999',
  },
  aboutSection: {
    marginTop: 12,
  },
  aboutHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
  },
  readMoreText: {
    color: '#ff4081',
    marginTop: 4,
  },
  bookButton:{
    //position:"absolute",
    marginTop:30,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  innerButton:{
    //flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  }
});
