import { AbstractRequestValidator } from '../../../abstract.validator';
import { CreateVariantRequestValidator, UpdateVariantRequestValidator } from '../variant/request.validator';
import type { CatalogProductEntity } from './product.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
declare class ProductMetadataRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    category?: string;
    brand?: string;
    hashtags?: string[];
    constructor(product?: CatalogProductEntity);
}
declare class UpdateProductVariantRequestValidator extends UpdateVariantRequestValidator {
    _id?: string;
    constructor(variant?: CatalogVariantEntity);
}
export declare class UpdateProductRequestValidator extends ProductMetadataRequestValidator {
    name: string;
    active?: boolean;
    variant?: UpdateProductVariantRequestValidator;
    constructor(product?: CatalogProductEntity);
}
export declare class CreateProductRequestValidator extends ProductMetadataRequestValidator {
    variant: CreateVariantRequestValidator;
}
export {};
