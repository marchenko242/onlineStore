import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {IProduct} from "../../models/IProduct";
import {getDataFromDB} from "../../services/api.service";

const ProductById = () => {

    const {id} = useParams<{id:string}>();



    const [product, setProduct] = useState<IProduct | null>(null);

    let productResponse = async () => {
        if(id) {
            const data = await getDataFromDB.productByID(Number(id));
            setProduct(data)
        }
    }
    productResponse();


    return (
        <div>
            {
                product?.title
            }
        </div>
    );
};

export default ProductById;