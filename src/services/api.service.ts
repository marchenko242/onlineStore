import axios from "axios";
import {IProduct} from "../models/IProduct";
// import { IProduct } from "../models/IProduct";
//
// const axiosInstance = axios.create({
//     baseURL: "https://dummyjson.com",
// });
//
// export const getProducts = async (): Promise<IProduct[]> => {
//     const axiosResponse = await axiosInstance.get<{ products: IProduct[] }>("/products");
//     return axiosResponse.data.products;
// };
//
// export const getProductByID = async (id: number): Promise<IProduct[]> => {
//     const axiosResponse = await axiosInstance.get<{ products: IProduct[] }>(`/products/${id}`);
//     return axiosResponse.data.products;
// };


export const getDataFromDB = {
    products: async(): Promise<IProduct[]> => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.results || [];
    },
    productByID: async (id: number): Promise<IProduct> => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        return data;

    }


}