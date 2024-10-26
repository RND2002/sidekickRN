
import { FlatList, StyleSheet, Text, View } from "react-native";
import Cart from "../components/Cart";
import {
  exportgetAllCartDataService,
  getAllJobDataForProfessionalService,
} from "../api/CartApi";
import { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../components/styles";

function CartScreen({navigation}) {
  const [cartData, setCartData] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.loggedInUser.role);

  // Fetch cart data on component mount
  useEffect(() => {
    getCartData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Your Services",
      headerStyle: {
        backgroundColor: GlobalStyles.colors.buttonColor, // Change the background color
      },
      headerTintColor: "#fff", // Change the text color
      headerTitleStyle: {
        //fontWeight: 'bold', // Optional: change the font style
      },
    });
  }, [navigation]);

  const getCartData = async () => {
    if (role === "User") {
      try {
        const response = await exportgetAllCartDataService(token);
        console.log(response.data);
        setCartData(response.data);
      } catch (error) {
        console.log(error);
      }
    } else if (role == "Provider") {
      //
      const response = await getAllJobDataForProfessionalService(token);
      if (response.status === 200) {
        console.log(response.data)
        setCartData(response.data);
      }
    }
  };

  // Function to render each cart item
  function renderCartData({ item }) {
    return (
      <Cart
        key={item.id}
        requesterName={item.requesterName}
        requesterPhone={item.requesterPhone}
        problemDescription={item.problemDescription}
        street={item.street}
        landMark={item.landMark}
        pincode={item.pincode}
        city={item.city}
        state={item.state}
        providerName={item.providerName}
        providerProfession={item.providerProfession}
        providerId={item.providerId}
        role={role}
        isDone={item.isDone}
        jobId={item.jobId} // Pass role from Redux state
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Recent Services</Text>
      <FlatList
        data={cartData}
        renderItem={renderCartData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the CartScreen container to fill the entire screen
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 24,
    marginLeft: 14,
    marginVertical: 12,
  },
});

export default CartScreen;
