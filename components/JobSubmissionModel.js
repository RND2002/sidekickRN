import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from 'react-native-image-picker';
import { Ionicons } from "@expo/vector-icons"; // For icons
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
const JobSubmissionModal = ({ visible, onClose, onSubmit }) => {
  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();


    async function verifyPermissions() {
      if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
  
        return permissionResponse.granted;
      }
  
      if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          'Insufficient Permissions!',
          'You need to grant camera permissions to use this app.'
        );
        return false;
      }
  
      return true;
    }


    async function takeImageHandler() {
      const hasPermission = await verifyPermissions();
  
      if (!hasPermission) {
        return;
      }
  
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
  
      setPickedImage(image.uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
      imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

  const handleSubmit =async () => {
    onSubmit({
      description,
      isDone,
      //jobId
      pickedImage
    });

    
    onClose(); // Close the modal after submission
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Submit Job Report</Text>

          {/* Description Input */}
          <TextInput
            style={styles.input}
            placeholder="Add description"
            value={description}
            onChangeText={setDescription}
          />

          {/* Image Picker */}
          <TouchableOpacity style={styles.imagePicker} onPress={takeImageHandler}>
            <Ionicons name="camera" size={24} color="#333" />
            <Text style={styles.imagePickerText}>Upload Image</Text>
          </TouchableOpacity>

          {pickedImage && (
            <Image source={{ uri: pickedImage }} style={styles.imagePreview} />
          )}

          {/* Job Done Checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setIsDone(!isDone)}>
              <Ionicons
                name={isDone ? "checkmark-circle" : "checkmark-circle-outline"}
                size={24}
                color={isDone ? "#32CD32" : "#ccc"}
              />
            </TouchableOpacity>
            <Text style={styles.checkboxText}>Job Done</Text>
          </View>

          {/* Submit Button */}
          <Button title="Submit Report" onPress={handleSubmit} />
          <Button title="Close" color="red" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 15,
  },
  imagePickerText: {
    marginLeft: 10,
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default JobSubmissionModal;
