// export async function getAddress(lat, lng) {
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
//     const response = await fetch(url);
  
//     if (!response.ok) {
//       throw new Error('Failed to fetch address!');
//     }
  
//     const data = await response.json();
//     const address = data.results[0].formatted_address;
//     return address;
//   }

//   const fetch = require('node-fetch');
// import { useDispatch } from 'react-redux';
// import { deviceLocationActions } from '../store/locationSlice';
// // const latitude = 37.7749;
// // const longitude = -122.4194;
// export async function getAddress(lat, lng) {
//     const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
//   const dispatch=useDispatch()
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       //console.log(data);
//       // Handle the geocoded address here
//       dispatch(deviceLocationActions.setDeviceLocation({
//         village:data.village,
//         district:state_district,
//         pincode:data.postcode,
//         displayName:data.display_name,
//         stateIn:state
//       }))
//       return data;
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//       throw error; // Rethrow the error if you want to handle it further up the call stack
//     }
//   }
  
  // util/location.js
export async function getAddress(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching address:', error);
      throw error; // Rethrow the error for further handling
    }
  }
  
