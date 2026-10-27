import { AbstractRequestValidator } from '../../../abstract.validator';
import { CreateVariantRequestValidator, UpdateVariantRequestValidator } from '../variant/request.validator';
import type { CatalogProductEntity } from './product.entity';
declare class ProductMetadataRequestValidator extends AbstractRequestValidator {
    name: string;
    sku?: string;
    description?: string;
    category?: string;
    brand?: string;
    hashtags?: string[];
    constructor(product?: CatalogProductEntity);
}
export declare class UpdateProductRequestValidator extends ProductMetadataRequestValidator {
    name: string;
    master?: string;
    masterVariant?: UpdateVariantRequestValidator;
    constructor(product?: CatalogProductEntity);
}
export declare class CreateProductRequestValidator extends ProductMetadataRequestValidator {
    masterVariant: CreateVariantRequestValidator;
}
export {};
