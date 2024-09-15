import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import ProviderCard from "../components/ProviderCard";
import { useEffect, useLayoutEffect, useState } from "react";
import { executeGetProfessionByCategoryService } from "../api/UserProfessionApi";
import { useSelector } from "react-redux";

function ServiceByNameScreen({ route, navigation }) {
  const { serviceId, serviceName } = route.params;
  const [content, setContent] = useState([]);
  const authToken = useSelector((state) => state.auth.token);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: serviceName,
    });
  }, [navigation]);

  const getProfessionByName = async () => {
    try {
      const response = await executeGetProfessionByCategoryService(0, 25, "plumber", authToken);
      if (response.status === 200) {
        const contentData = response.data?.content;
        //console.log(contentData)  // Use optional chaining to avoid undefined errors
        setContent(contentData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfessionByName();
  }, []);
  const renderProfessionData = ({ item }) => (
    <View style={styles.cardContainer}>
      <Pressable onPress={() => goToServiceProviderPage(item.professionId, item.userId, item.fullName)}>
        <ProviderCard
          key={item.professionId}  // Key to help React render efficiently, but doesn't impact params
          id={item.professionId}
          userId={item.userId}
          name={item.fullName}
          profession={item.occupation}
          availability={item.availability}
        />
      </Pressable>
    </View>
  );
  
  function goToServiceProviderPage(jobId, userId, userName) {
    console.log("Navigating with:", { jobId, userId, userName });  // Debugging: log the values to verify
    navigation.navigate('ProviderProfileScreen', { jobId: jobId, providerId: userId, fullName: userName });
  }
  

  return (
    <View style={styles.container}>
      <Text>{serviceId + " " + serviceName}</Text>
      <FlatList
        data={content}
        renderItem={renderProfessionData}
        keyExtractor={(item) => item.id ? `${item.id}` : `key-${item.userId}`}  // Ensure unique key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ServiceByNameScreen;
