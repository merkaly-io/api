import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogProductEntity } from './product.entity';
type CatalogProductRequestSource = CatalogProductEntity;
export declare class CreateProductRequestValidator extends AbstractRequestValidator {
    name: string;
    sku?: string;
    description?: string;
    sellPrice?: number;
    buyPrice?: number;
    pictures?: string[];
    category?: string;
    brand?: string;
    hashtags: string[];
    constructor(product?: CatalogProductRequestSource);
}
export declare class UpdateProductRequestValidator extends CreateProductRequestValidator {
    name: string;
}
export {};
