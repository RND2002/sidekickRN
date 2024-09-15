import { Pressable, StyleSheet, View, FlatList, Text, Button, Alert } from "react-native";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { executeAddToCartService } from "../api/CartApi";
import { useSelector } from "react-redux";
import { executeGetAllAddressService } from "../api/AddressApi";

function AddressScreen({ route }) {
    const { providerId } = route.params;
    const [description, setDescription] = useState('');
    const [addressList, setAddressList] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const token = useSelector((state) => state.auth.token);

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
    };

    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => handleSelectAddress(item.id)}
            style={[
                styles.addressItem,
                item.id === selectedAddressId && styles.selectedAddressItem
            ]}
        >
            <Text>{item.street + ", " +
                item.landMark + ", " +
                item.city + ", " +
                item.state + ", " +
                item.pinCode}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Input
                label="Add Problem Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: handleDescriptionChange,
                    value: description,
                }}
            />
            <FlatList
                data={addressList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.flatList}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Confirm Booking"
                    onPress={addToCart}
                    disabled={!description.trim() || selectedAddressId === null}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
    },
    flatList: {
        marginTop: 12,
    },
    addressItem: {
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    selectedAddressItem: {
        backgroundColor: 'green',
        borderColor: '#bbb',
    },
    buttonContainer: {
        marginTop: 20,
        padding: 12,
    },
});

export default AddressScreen;
