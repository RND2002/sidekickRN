import { apiClient } from "./ApiClient";

export const executeGetProfessionByCategoryService = (page,size,profession, token) => {
    return apiClient.get(`/profession/occupation`, {
        params: { page,size,profession },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const executeHandleAvailability = (token) => {
    return apiClient.patch(
      `profession/toggle/availability`,
      {}, // This represents the request body; it can be empty for this case.
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  