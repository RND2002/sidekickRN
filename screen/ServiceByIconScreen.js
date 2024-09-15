import { StyleSheet,View,Text } from "react-native";
import ProviderCard from "../components/ProviderCard";
import { useLayoutEffect } from "react";
function ServiceByNameScreen({route,navigation}){

     const {serviceId,serviceName}=route.params
    
    useLayoutEffect(() => {
       
    
        navigation.setOptions({
          title: serviceName,
        });
      }, [ navigation]);
   return (
    <View style={styles.container}>
    {/* <View ><Header/></View> */}
    <View style={styles.cardContainer}>
        <Text>{serviceId+" "+serviceName}</Text>
        <ProviderCard/>
        <ProviderCard/>
        <ProviderCard/>
        <ProviderCard/>
    </View>

</View>
   )

}

const styles = StyleSheet.create({
    cardContainer:{
        margin:10
    }

})

export default ServiceByNameScreen;