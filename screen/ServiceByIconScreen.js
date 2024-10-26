// import { StyleSheet,View,Text, FlatList } from "react-native";
// import ProviderCard from "../components/ProviderCard";
// import { useLayoutEffect, useState } from "react";
// import { executeGetProfessionByCategoryService } from "../api/UserProfessionApi";
// import { useSelector } from "react-redux";
// function ServiceByNameScreen({route,navigation}){
//     const [content,setContent]=useState([])
//      const {serviceId,serviceName}=route.params
//     const authToken=useSelector((state)=>state.auth.token)
//     useLayoutEffect(() => {
       
    
//         navigation.setOptions({
//           title: serviceName,
//         });
//       }, [ navigation]);

//       const getProfessionByName = async (serviceName) => {
//         try {
//           const response = await executeGetProfessionByCategoryService(
//             0,
//             25,
//             serviceName,
//             authToken
//           );
//           if (response.status === 200) {
//             const contentData = response.data?.content;
//             console.log(contentData)
//             setContent(contentData);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
    
//       const handleServiceRequestButton = (title) => {
//         setSelectedButton(title); // Update selected button
//         getProfessionByName(title);
//       };
//    return (
//     <View style={styles.container}>
//     {/* <View ><Header/></View> */}
//     <View style={styles.cardContainer}> //id,userId,name,profession,availability
//         <ServiceProviderCard
        
//         />
//         <FlatList 
//     </View>

// </View>
//    )

// }

// const styles = StyleSheet.create({
//     cardContainer:{
//         margin:10
//     }

// })

// export default ServiceByNameScreen;

import { StyleSheet, View, Text, FlatList } from "react-native";
import ServiceProviderCards from '../components/ServiceProviderCards'
import { useLayoutEffect, useState } from "react";
import { executeGetProfessionByCategoryService } from "../api/UserProfessionApi";
import { useSelector } from "react-redux";

function ServiceByIconScreen({ route, navigation }) {
  const [content, setContent] = useState([]);
  const { serviceId, serviceName } = route.params;
  const authToken = useSelector((state) => state.auth.token);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: serviceName,
    });
    getProfessionByName(serviceName); // Fetch data when the component loads
  }, [navigation]);

  const getProfessionByName = async (serviceName) => {
    try {
      const response = await executeGetProfessionByCategoryService(
        0,
        25,
        serviceName,
        authToken
      );
      if (response.status === 200) {
        const contentData = response.data?.content || [];
        console.log(contentData)
        setContent(contentData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {content.length === 0 ? (
          <Text style={styles.noServiceText}>No service available</Text>
        ) : (
          <FlatList
            data={content}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ServiceProviderCards
              key={item.id}
                id={item.id}
                userId={item.userId}
                name={item.fullName}
                profession={item.occupation}
                availability={item.availability}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    margin: 10,
  },
  noServiceText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});

export default ServiceByIconScreen;
