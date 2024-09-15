
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function ServiceCard({ title, image, onPress }) {
    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.gridItem,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <Image source={image} style={styles.image} />
            </Pressable>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150, // Fixed width for each card to fit better in scroll view
        marginHorizontal: 10, // Space between cards
        alignItems: 'center',
    },
    gridItem: {
        backgroundColor: "#f0f0f0",
        height: 120,
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        marginTop: 8,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default ServiceCard;
