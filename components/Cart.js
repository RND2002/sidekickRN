import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Linking, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import JobSubmissionModal from "./JobSubmissionModel";
import { useState } from "react";
import {
  executeUploadJobImageService,
  exexuteMarkJobDone,
} from "../api/CartApi";
import { useSelector } from "react-redux";
function Cart({
  requesterName,
  requesterPhone,
  problemDescription,
  street,
  landMark,
  pincode,
  city,
  state,
  providerName,
  providerProfession,
  providerId,
  jobId,
  isDone,
  role,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleJobSubmit = async (jobData) => {
    console.log("Job Submitted:", jobData);
    const { isDone, description, pickedImage } = jobData;

    try {
      // Attempt to upload the image but don't stop the execution if it fails
      let imageUploadSuccessful = false;
      try {
        const imageUploadResponse = await executeUploadJobImageService(
          pickedImage,
          jobId,
          token
        );
        if (imageUploadResponse.status === 200) {
          imageUploadSuccessful = true;
          console.log("Image uploaded successfully");
        } else {
          console.log(
            "Image upload failed with status:",
            imageUploadResponse.status
          );
        }
      } catch (imageError) {
        console.error("Error during image upload:", imageError);
      }

      // Proceed with marking the job as done, regardless of image upload outcome
      const markJobDoneResponse = await exexuteMarkJobDone(
        { jobId, isDone, description },
        token
      );

      if (markJobDoneResponse.status === 200) {
        console.log("Job marked as done");
      } else {
        console.log(
          "Error marking the job as done with status:",
          markJobDoneResponse.status
        );
      }
    } catch (error) {
      console.error("Error during job submission:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          {role === "User" ? (
            <Text style={styles.nameText}>{providerName}</Text>
          ) : (
            <Text style={styles.nameText}>{requesterName}</Text>
          )}
        </View>
        <View>
          {role === "User" && (
            <Text style={styles.jobText}>{providerProfession}</Text>
          )}
        </View>
      </View>
      {role === "Provider" && (
        <>
          <View>
            <Text style={styles.iconText}>Problem: {problemDescription}</Text>
          </View>
          <View>
            <Text style={styles.iconText}>
              Address: {street}, {pincode}, {landMark}, {city}, {state}
            </Text>
          </View>
        </>
      )}

      <View style={styles.icon}>
        <View style={styles.individualIcon}>
          {role === "User" ? (
            <>
              <MaterialCommunityIcons
                name="google-maps"
                size={24}
                color="#1E90FF"
              />
              <Text style={styles.iconText}>Track</Text>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${requesterPhone}`)}
              >
                <MaterialIcons
                  name="phone-callback"
                  size={24}
                  color="#1E90FF"
                />
                <Text style={styles.iconText}>Call</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.individualIcon}>
          {role === "User" ? (
            <>
              <Feather name="star" size={24} color="#FFD700" />
              <Text style={styles.iconText}>Rate</Text>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={handleOpenModal}
                style={styles.iconButton}
              >
                <Feather name="upload" size={24} color="#FFD700" />
                <Text style={styles.iconText}>Upload Report</Text>
              </TouchableOpacity>

              <JobSubmissionModal
                visible={isModalVisible}
                onClose={handleCloseModal}
                onSubmit={handleJobSubmit}
              />
            </>
          )}
        </View>

        <View style={styles.individualIcon}>
          {role === "User" ? (
            <>
              <MaterialIcons name="handyman" size={24} color="#32CD32" />
              <Text style={styles.iconText}>Job</Text>
            </>
          ) : (
            <>
              {isDone===true ? (
                <>
                  <Ionicons name="checkmark-done" size={24} color="#32CD32" />
                  <Text style={styles.iconText}>Done</Text>
                </>
              ) : (
                <>
                  <Ionicons name="close-circle" size={24} color="red" />
                  <Text style={styles.iconText}>Not Done</Text>
                </>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10, // More rounded corners for modern look
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9", // Light background color
    margin: 10,
    padding: 20, // More padding for spacious layout
    elevation: 3, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15, // Space between name/job and icons
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Darker text for visibility
  },
  jobText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666", // Muted color to differentiate job title
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensure icons are spaced evenly
    marginTop: 10,
  },
  individualIcon: {
    width: "30%", // 30% width to leave space between icons
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff", // White background for contrast
    borderRadius: 8, // Rounded icons container
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#333", // Matching the darker text theme
  },
});

export default Cart;
