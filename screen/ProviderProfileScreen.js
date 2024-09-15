import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import ProviderCard from "../components/ProviderCard";
import { executeGetProfessionService } from "../api/CartApi";
import { useSelector } from "react-redux";
import MyButton from "../components/MyButton";

function ProviderProfileScreen({ route, navigation }) {
    const [providerData, setProviderData] = useState({
        fullName: 'dummy',
        occupation: '',
        experience: '',
        description: '',
        available: ''
    });

    const { jobId, providerId, fullName } = route.params;
    const token = useSelector((state) => state.auth.token);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: fullName, // Assuming you want to set the title in the header
        });
    }, [navigation, fullName]);

    const getUserProfessionById = async () => {
        try {
            console.log(providerId);
            const response = await executeGetProfessionService(providerId, token);
            if (response.status === 200) {
                console.log(response.data);
                setProviderData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserProfessionById();
    }, [providerId]);

    const goToAddressPage=async()=>{
        navigation.navigate('AddressScreen',{providerId})
    }

    return (
        <View style={styles.container}>
            <ProviderCard
                key={jobId}  // Key to help React render efficiently, but doesn't impact params
                id={jobId}
                userId={providerId}
                name={providerData.fullName}
                profession={providerData.occupation}
                availability={providerData.available ? 'Available' : 'Not Available'}
                
            />
            <View><Text>{providerData.description}</Text></View>
            <MyButton onPress={goToAddressPage} backgroundColor="green" title="Book Service"/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        //justifyContent:"space-around"
    }
})

export default ProviderProfileScreen