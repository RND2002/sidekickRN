
// import React from 'react';
// import { StyleSheet, View, Text, ScrollView } from 'react-native';
// import ServiceCard from './ServiceCard';

// export default function HorizontalSlider() {
//     return (
//         <View style={styles.sliderContainer}>
//             <Text style={styles.sliderTitle}>Most Popular Services</Text>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                 <View style={styles.cardWrapper}>
//                     <ServiceCard
//                         title="Fridge"
//                         image={require('../assets/fridge.jpeg')}  // Path to your image
//                         onPress={() => console.log('Fridge pressed!')}
//                     />
//                     <ServiceCard
//                         title="Ac repair"
//                         image={require('../assets/ac.jpg')}  // Another example image
//                         onPress={() => console.log('AC repair pressed!')}
//                     />
//                     <ServiceCard
//                         title="Television"
//                         image={require('../assets/tv.jpg')}  // Another example image
//                         onPress={() => console.log('Television pressed!')}
//                     />
//                     <ServiceCard
//                         title="Water Purifier"
//                         image={require('../assets/waterPurifier.jpeg')}  // Another example image
//                         onPress={() => console.log('Water Purifier pressed!')}
//                     />
//                     {/* Add more ServiceCards as needed */}
//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     sliderContainer: {
//         marginTop: 20,
//         paddingHorizontal: 10,
//     },
//     sliderTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     cardWrapper: {
//         flexDirection: 'row', // Allows horizontal scrolling
//     }
// });
