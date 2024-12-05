import axios from "axios"
import { env } from "./environment";

const base_url = `${env}/executives`


export const getAllMembers = async () => {

    const response = await axios.get(`${base_url}/get/all`);
    
    if(response.status === 200) {
        return response.data;
    } else{
        return [];
    }

}

export const getSingleMember = async (id) => {

    const response = await axios.get(`${base_url}/view/${id}`);
    
    if(response.status === 200) {
        return response.data;
    } else{
        return [];
    }

}

