import { apiClient } from "./ApiClient";

export const executeGetUserDataService = (token) => {
  //console.log(token)
  return apiClient.get(`/loggedInUser`, {    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    },
  });
};

export const executePostUserProfessionService = (professionData, token) => {
  return apiClient.post(`/profession`, professionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const executeGetUserProfessionService = (token) => {
  return apiClient.get(`/profession`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


