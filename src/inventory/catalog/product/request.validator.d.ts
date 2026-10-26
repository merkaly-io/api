import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogProductEntity } from './product.entity';
type CatalogProductRequestSource = CatalogProductEntity;
export declare class ProductAttributeRequestValidator extends AbstractRequestValidator {
    type: string;
    values: string[];
    constructor(attribute?: CatalogProductEntity['attributes'][number]);
}
export declare class CreateProductRequestValidator extends AbstractRequestValidator {
    name: string;
    sku?: string;
    gtin?: string;
    description?: string;
    sellPrice?: number;
    buyPrice?: number;
    pictures?: string[];
    category?: string;
    brand?: string;
    hashtags: string[];
    attributes: ProductAttributeRequestValidator[];
    constructor(product?: CatalogProductRequestSource);
}
export declare class UpdateProductRequestValidator extends CreateProductRequestValidator {
    name: string;
}
export {};
