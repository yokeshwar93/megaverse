import axios from "axios";
import { DeleteRequestParam, RequestParam } from "./types";

export class ApiInstance {
    apiInstance: any;

    constructor() {
        this.apiInstance = getAxiosInstance(); 
    }
    async get(url: string) {
        try {
            const { data } = await this.apiInstance.get(url);
            return data;
        } catch(e) {
            console.error('Error while fetching goal.Please try again later', e);
        }
        
    }
    async post(url: string, params: RequestParam) {
        try {
            const  { data } = await this.apiInstance.post(url, params);
            return data
        } catch(e) {
            console.log('Error while posting object.Please try again later', e);
        }
        
    }
    async delete(url: string, params: DeleteRequestParam) {
        try {
            const  { data } = await this.apiInstance.delete(url, params);
            return data
        } catch(e) {
            console.log('Error while deleting object.Please try again later', e);
        }
    }
}
const getAxiosInstance =  () => {
    return axios.create({
    baseURL: 'https://challenge.crossmint.io/api/',
    headers: {'X-Content-Type': 'application/json'}
  });
}