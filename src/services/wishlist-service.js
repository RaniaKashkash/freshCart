import { apiClient } from "./api-client"

export default  async function addProductToWishlist({id}){
    try {
        const options={
            method:'POST',
            url:'/wishlist',
            data:{
                productId:id
            }
        }
        const response=await apiClient.request(options);
        return response;
    } catch (error) {
        throw error;
    }
}

export  async function getUserWishlistProducts(){
      try {
        const options={
            method:'GET',
            url:'/wishlist',
        }
        const response=await apiClient.request(options);
        return response;
        } catch (error) {
        throw error;
    }
}

export  async function removeProductFromWishlist({id}){
      try {
        const options={
            method:'DELETE',
            url:`/wishlist/${id}`,
        }
        const response=await apiClient.request(options);
        return response;
        } catch (error) {
        throw error;
    }
}

