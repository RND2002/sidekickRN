import { apiClient } from "./ApiClient";

export const executeGetAllAddressService=(token)=>{
    return apiClient.get(`/address/getAll`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

export const executePostAddressService=(address,token)=>{
    return apiClient.post(`/address`,address,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}

