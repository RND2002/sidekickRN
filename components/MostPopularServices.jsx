// import { FlatList, StyleSheet, Text, View } from "react-native";
// import CustomButton from "./CustomButton";
// import ServiceProviderCard from "./ServiceProviderCards";
// import { useState } from "react";
// import {executeGetProfessionByCategoryService} from '../api/UserProfessionApi'
// import { useSelector } from "react-redux";
// function MostPopularServices() {
//   const [content, setContent] = useState([]);
//     const authToken=useSelector((state)=>state.auth.token)
//   const getProfessionByName = async (title) => {
//     try {
//       const response = await executeGetProfessionByCategoryService(0, 25, title, authToken);
//       if (response.status === 200) {
//         const contentData = response.data?.content;
//         setContent(contentData);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   function handleServiceRequestButton(title) {
//     getProfessionByName(title);
//   }

//   const renderServiceProvider = ({ item }) => (
//     <ServiceProviderCard
//       key={item.professionId}
//       id={item.professionId}
//       userId={item.userId}
//       name={item.fullName}
//       profession={item.occupation}
//       availability={item.availability}
//     />
//   );

//   const serviceButtons = [
//     { title: "All", width: 60 },
//     { title: "Electrician", width: 120 },
//     { title: "Plumber", width: 120 },
//     { title: "Carpenter", width: 120 },
//   ];

//   const renderServiceButton = ({ item }) => (
//     <View style={styles.individualButton}>
//       <CustomButton
//         title={item.title}
//         width={item.width}
//         height={35}
//         onPress={() => handleServiceRequestButton(item.title)}
//       />
//     </View>
//   );

//   return (
//     <>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Most Popular Services</Text>
//         <FlatList
//           data={serviceButtons}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.title}
//           renderItem={renderServiceButton}
//           style={styles.flatListHorizontal} // Give some styles to the FlatList
//         />
//       </View>

//       <FlatList
//         data={content}
//         keyExtractor={(item) => item.professionId.toString()}
//         renderItem={renderServiceProvider}
//         contentContainerStyle={styles.listContainer}
//       />
//     </>
//   );
// }

// export default MostPopularServices;

// const styles = StyleSheet.create({
//   container: {},
//   buttonContainer: {
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 8,
//   },
//   individualButton: {
//     marginLeft: 4,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "500",
//     marginLeft: 24,
//   },
//   flatListHorizontal: {
//     paddingVertical: 10,
//   },
//   listContainer: {
//     paddingBottom: 20, // Adjust based on your layout needs
//   },
// });

// // import { FlatList, StyleSheet, Text, View } from "react-native";
// // import CustomButton from "./CustomButton";
// // import ServiceProviderCard from "./ServiceProviderCards";
// // import { useState } from "react";
// // import executeGetProfessionByCategoryService from '../api/UserApi'
// // function MostPopularServices() {
// //   const [content, setContent] = useState([]);

// //   const getProfessionByName = async (title) => {
// //     try {
// //       const response = await executeGetProfessionByCategoryService(0, 25, title, authToken);
// //       if (response.status === 200) {
// //         const contentData = response.data?.content;
// //         setContent(contentData);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   function handleServiceRequestButton(title) {
// //     getProfessionByName(title);
// //   }

// //   const renderServiceProvider = ({ item }) => (
// //     <ServiceProviderCard
// //       key={item.professionId}
// //       id={item.professionId}
// //       userId={item.userId}
// //       name={item.fullName}
// //       profession={item.occupation}
// //       availability={item.availability}
// //     />
// //   );

// //   const serviceButtons = [
// //     { title: "All", width: 60 },
// //     { title: "Electrician", width: 120 },
// //     { title: "Plumber", width: 120 },
// //     { title: "Carpenter", width: 120 },
// //   ];

// //   const renderServiceButton = ({ item }) => (
// //     <View style={styles.individualButton}>
// //       <CustomButton
// //         title={item.title}
// //         width={item.width}
// //         height={35}
// //         onPress={() => handleServiceRequestButton(item.title)}
// //       />
// //     </View>
// //   );

// //   return (
// //     <>
// //       <View style={styles.container}>
// //         <Text style={styles.heading}>Most Popular Services</Text>
// //         <View style={styles.buttonContainer}>
// //           <FlatList
// //             data={serviceButtons}
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             keyExtractor={(item) => item.title}
// //             renderItem={renderServiceButton}
// //           />
// //         </View>
// //       </View>

// //       <FlatList
// //         data={content}
// //         keyExtractor={(item) => item.professionId.toString()}
// //         renderItem={renderServiceProvider}
// //       />
// //     </>
// //   );
// // }

// // export default MostPopularServices;

// // const styles = StyleSheet.create({
// //   container: {},
// //   buttonContainer: {
// //     marginLeft: 20,
// //     marginRight: 20,
// //     marginTop: 8,
// //   },
// //   individualButton: {
// //     marginLeft: 4,
// //   },
// //   heading: {
// //     fontSize: 20,
// //     fontWeight: "500",
// //     marginLeft: 24,
// //   },
// // });

// // import { FlatList, StyleSheet, Text, View } from "react-native";
// // import CustomButton from "./CustomButton";
// // import ServiceProviderCard from "./ServiceProviderCards";
// // import { useState, useCallback } from "react";

// // function MostPopularServices() {
// //     const [content, setContent] = useState([]);

// //     const getProfessionByName = async (title) => {
// //         try {
// //             const response = await executeGetProfessionByCategoryService(0, 25, title, authToken);
// //             if (response.status === 200) {
// //                 const contentData = response.data?.content;
// //                 console.log(contentData)
// //                 setContent(contentData);
// //             }
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     };

// //     const handleServiceRequestButton = useCallback((title) => {
// //         getProfessionByName(title);
// //     }, []);

// //     const renderServiceProvider = ({ item }) => (
// //         <ServiceProviderCard
// //             key={item.professionId} // Ensure a unique key for each item
// //             id={item.professionId}
// //             userId={item.userId}
// //             name={item.fullName}
// //             profession={item.occupation}
// //             availability={item.availability}
// //         />
// //     );

// //     const renderButton = ({ item }) => (
// //         <View style={styles.individualButton}>
// //             <CustomButton
// //                 title={item.title}
// //                 width={item.width}
// //                 height={35}
// //                 onPress={() => handleServiceRequestButton(item.category)}
// //             />
// //         </View>
// //     );

// //     const buttonData = [
// //         { title: "All", width: 60, category: "All" },
// //         { title: "Electrician", width: 120, category: "Electrician" },
// //         { title: "Plumber", width: 120, category: "Plumber" },
// //         { title: "Carpenter", width: 120, category: "Carpenter" },
// //     ];

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.heading}>Most Popular Services</Text>
// //             <FlatList
// //                 data={buttonData}
// //                 renderItem={renderButton}
// //                 keyExtractor={(item) => item.title}
// //                 horizontal
// //                 showsHorizontalScrollIndicator={false}
// //                 style={styles.buttonContainer}
// //             />
// //             <FlatList
// //                 data={content}
// //                 keyExtractor={(item) => item.professionId.toString()}
// //                 renderItem={renderServiceProvider}
// //                 //contentContainerStyle={styles.listContainer}
// //             />
// //         </View>
// //     );
// // }

// // export default MostPopularServices;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //     },
// //     buttonContainer: {
// //         marginLeft: 20,
// //         marginRight: 20,
// //         marginTop: 8,
// //     },
// //     individualButton: {
// //         marginLeft: 4,
// //     },
// //     heading: {
// //         fontSize: 20,
// //         fontWeight: "500",
// //         marginLeft: 24,
// //     },
// // });

import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import ServiceProviderCard from "./ServiceProviderCards";
import { useState, useEffect } from "react";
import { executeGetProfessionByCategoryService } from "../api/UserProfessionApi";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./styles";

function MostPopularServices() {
  const [content, setContent] = useState([]);
  const [selectedButton, setSelectedButton] = useState("All"); // Track the selected button
  const authToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    // Automatically fetch the "All" category on mount
    getProfessionByName("All");
  }, []);

  const getProfessionByName = async (title) => {
    try {
      const response = await executeGetProfessionByCategoryService(
        0,
        25,
        title,
        authToken
      );
      if (response.status === 200) {
        const contentData = response.data?.content;
        console.log(contentData)
        setContent(contentData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleServiceRequestButton = (title) => {
    setSelectedButton(title); // Update selected button
    getProfessionByName(title);
  };

  const renderServiceProvider = ({ item }) => (
    <ServiceProviderCard
      key={item.professionId}
      id={item.professionId}
      userId={item.userId}
      name={item.fullName}
      profession={item.occupation}
      availability={item.availability}
    />
  );

  const serviceButtons = [
    { title: "All", width: 60 },
    { title: "Electrician", width: 120 },
    { title: "Plumber", width: 120 },
    { title: "Carpenter", width: 120 },
  ];

  const renderServiceButton = ({ item }) => {
    const isSelected = selectedButton === item.title;
    return (
      <View style={styles.individualButton}>
        <CustomButton
          title={item.title}
          width={item.width}
          height={35}
          backgroundColor={isSelected ? GlobalStyles.colors.buttonColor : "white"} // Change background based on selection
          textColor={isSelected ? "white" : "black"}
          borderWidth={ isSelected===false? 1:null} // Change text color accordingly
          onPress={() => handleServiceRequestButton(item.title)}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Most Popular Services</Text>
        <FlatList
          data={serviceButtons}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={renderServiceButton}
          style={styles.flatListHorizontal}
        />
      </View>

      <FlatList
        data={content}
        keyExtractor={(item) => item.professionId.toString()}
        renderItem={renderServiceProvider}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
}

export default MostPopularServices;

const styles = StyleSheet.create({
  container: {
    margin:4
  },
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
  },
  individualButton: {
    marginLeft: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 24,
  },
  flatListHorizontal: {
    paddingVertical: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
