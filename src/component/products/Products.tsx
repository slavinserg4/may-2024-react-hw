import React, {FC} from 'react';
import {productList} from "../../data";
import {IProductsModel} from "../../models/IProductsModel";
import Product from "../poduct/Product";


const Products: FC  = () => {
    const products:IProductsModel[] = productList.products;
    return (
        <div>
            {
                products.map((product: IProductsModel) => (<Product item={product}/>))
            }
        </div>
    );
};

export default Products;