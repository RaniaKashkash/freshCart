import { apiClient } from "./api-client"

export async function getAllCategories(){
    const options={
        method:'GET',
        url:'/categories'
    }
    try{
        const response =await apiClient.request(options);
        return response;
    }catch(error){
        console.log(error)
    }
}