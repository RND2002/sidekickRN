import { Text, View, StyleSheet } from "react-native";
import InputSearch from "./InputSeach";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

function Header() {
  return (
    <LinearGradient
      colors={["#f9d66e","#f8e4a7" ]} // Yellow fading to transparent "#f9d66e","#f8e4a7"
      style={styles.main}
    >
      <View style={styles.container}>
        <View style={styles.headerDiv}>
          {/* <View>
            <Text style={styles.heading}>Sidekick</Text>
          </View> */}
          <View>
            <FontAwesome name="user-circle" size={26} color="black" />
          </View>
        </View>
        <View>
          <Text style={styles.address}>Varanasi, 221311, Uttar Pradesh</Text>
        </View>
        <InputSearch style={styles.search} placeholder="Search Services" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 200,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 50,
  },
  search: {
    marginRight: 15,
  },
  heading: {
    fontWeight: "600",
    fontSize: 24,
  },
  address: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
    marginBottom: 10,
  },
  headerDiv: {
    marginLeft: 12,
    marginRight: 24,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
