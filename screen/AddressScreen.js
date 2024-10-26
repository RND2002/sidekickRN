
import { Pressable, StyleSheet, View, FlatList, Text, Alert, Animated } from "react-native";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { executeAddToCartService } from "../api/CartApi";
import { useSelector } from "react-redux";
import { executeGetAllAddressService } from "../api/AddressApi";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons"; // Icon package
import { GlobalStyles } from "../components/styles";

function AddressScreen({ route }) {
    const { providerId } = route.params;
    const [description, setDescription] = useState('');
    const [addressList, setAddressList] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const token = useSelector((state) => state.auth.token);
    const scaleValue = new Animated.Value(1);

    function handleDescriptionChange(enteredValue) {
        setDescription(enteredValue);
    }

    const getAddressOfUser = async () => {
        try {
            const response = await executeGetAllAddressService(token);
            if (response.status === 200) {
                setAddressList(response.data);
            } else {
                console.log("Error fetching addresses");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getAddressOfUser();
    }, []);

    const addToCart = async () => {
        if (!description.trim()) {
            Alert.alert("Error", "Please enter a description.");
            return;
        }

        if (selectedAddressId === null) {
            Alert.alert("Error", "Please select an address.");
            return;
        }

        try {
            const response = await executeAddToCartService({
                providerId: providerId,
                problemDescription: description,
                addressId: selectedAddressId,
            }, token);
            if (response.status === 200) {
                Alert.alert("Success", "Added to cart");
            }
        } catch (error) {
            console.log("Error adding to cart:", error);
        }
    };

    const handleSelectAddress = (id) => {
        setSelectedAddressId(id);
        animateSelection();
    };

    const animateSelection = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const renderItem = ({ item }) => (
        <Animated.View style={{ transform: [{ scale: item.id === selectedAddressId ? scaleValue : 1 }] }}>
            <Pressable
                onPress={() => handleSelectAddress(item.id)}
                style={[
                    styles.addressItem,
                    item.id === selectedAddressId && styles.selectedAddressItem
                ]}
            >
                <View style={styles.iconContainer}>
                    <Ionicons name="location-sharp" size={24} color={item.id === selectedAddressId ? GlobalStyles.colors.buttonColor : GlobalStyles.colors.headerColor} />
                </View>
                <Text style={styles.addressText}>
                    {item.street + ", " +
                        item.landMark + ", " +
                        item.city + ", " +
                        item.state + ", " +
                        item.pinCode}
                </Text>
            </Pressable>
        </Animated.View>
    );

    return (
        <View style={styles.container}>
            <Input
                label="Describe Your Issue"
                textInputConfig={{
                    multiline: true,
                    onChangeText: handleDescriptionChange,
                    value: description,
                }}
                style={styles.input}
            />
            <FlatList
                data={addressList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.flatList}
            />
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Confirm Booking"
                    width={"100%"}
                    onPress={addToCart}
                    disabled={!description.trim() || selectedAddressId === null}
                    customStyle={styles.buttonGlow}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Add New Address"
                    width={"100%"}
                    backgroundColor={GlobalStyles.colors.outlineButton}
                    textColor={"black"}
                    //onPress={addToCart}
                    //={!description.trim() || selectedAddressId === null}
                    customStyle={styles.buttonGlow}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f5ff',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 18,
        marginVertical: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    flatList: {
        marginTop: 16,
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 14,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    selectedAddressItem: {
        backgroundColor: 'linear-gradient(90deg, #74ebd5 0%, #ACB6E5 100%)',
        borderColor: GlobalStyles.colors.buttonColor,
        borderWidth: 2,
    },
    addressText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2f3640',
        marginLeft: 10,
        flex: 1,
    },
    iconContainer: {
        padding: 10,
        backgroundColor: '#f0f5ff',
        borderRadius: 12,
    },
    buttonContainer: {
        //marginTop: 10,
        padding: 12,
        alignItems: 'center',
    },
    buttonGlow: {
        borderRadius: 20,
        shadowColor: '#0097e6',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        backgroundColor: '#0097e6',
        elevation: 8,
    },
});

export default AddressScreen;
