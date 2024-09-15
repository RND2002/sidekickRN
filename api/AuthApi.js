import { apiClient } from "./ApiClient";


export const executeLoginService=(loginData)=>{
    return apiClient.post(`/auth/authenticate`,loginData,{
        
    })
};

export const executeSignupService=(signupData)=>{
    return apiClient.post(`/auth/register`,signupData,{

    })
}

export const executeActivateAccountService = (token) => {
    return apiClient.get(`/auth/activate-account`, {
      params: { token }
    });
  };