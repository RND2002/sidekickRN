import { apiClient } from "./ApiClient";

export const executeAddToCartService=(cartData,token)=>{
    return apiClient.patch(`/cart`,cartData,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })
}

export const executeGetProfessionService = (id, token) => {
    return apiClient.get(`/provider/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Add this line if token is required
        },
    });
};

export const exportgetAllCartDataService=(token)=>{
    return apiClient.get(`/cart/getAll`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
}

export const getAllJobDataForProfessionalService=(token)=>{
    return apiClient.get(`/providerJob/getAll`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export const exexuteMarkJobDone=(responseData,token)=>{
    return apiClient.patch(`providerJob/markAsDone`,responseData,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
}

export const executeUploadJobImageService=(formData,jobId,token)=>{
    return apiClient.patch(`providerJob/saveJobImage/${jobId}`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    });
}