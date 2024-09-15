import { apiClient } from "./ApiClient";

export const executeRateEmployeeService=(ratingObj,token)=>{
    return apiClient.put(`/rating/rate`,ratingObj,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const executeGetRatingOfProfessional = (providerId, token) => {
    return apiClient.get(`rating/get/${providerId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  