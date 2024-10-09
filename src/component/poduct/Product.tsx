import React, {FC} from 'react';
import {IProductsModel} from "../../models/IProductsModel";

type TypeProps = { item: IProductsModel }

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.discountPercentage}</p>
            <p>{item.rating}</p>
            <p>{item.stock}</p>
            <p>{item.tags}</p>
            <p>{item.brand}</p>
            <p>{item.sku}</p>
            <p>{item.weight}</p>
            <p>{item.dimensions?.depth}</p>
            <p>{item.dimensions?.height}</p>
            <p>{item.dimensions?.width}</p>
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            <p>{item.meta?.qrCode}</p>
            <p>{item.meta?.barcode}</p>
            <p>{item.meta?.createdAt}</p>
            <p>{item.meta?.updatedAt}</p>
            <p>{item.thumbnail}</p>
            <img src={item.thumbnail} alt={item.title}/>
            <hr/>
        </div>
    );
};

export default Product;