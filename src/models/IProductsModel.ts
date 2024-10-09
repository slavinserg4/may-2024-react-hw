import {IReviewModel} from "./IReviewModel";
import {IDimensionsModel} from "./IDimensionsModel";

export interface IProductsModel{
    id?: number,
    title?: string,
    description?: string,
    category?: string,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    tags?: string[],
    brand?: string,
    sku?: string,
    weight?: number,
    dimensions?: IDimensionsModel,
    warrantyInformation?: string,
    shippingInformation?: string,
    availabilityStatus?: string,
    reviews?: IReviewModel[],
    returnPolicy?: string,
    minimumOrderQuantity?: number,
    meta?: {
        createdAt?: string,
        updatedAt?: string,
        barcode?: string,
        qrCode?: string
    },
    images?: string[],
    thumbnail?: string
}