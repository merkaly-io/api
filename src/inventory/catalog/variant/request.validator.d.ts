import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogVariantEntity } from 'src/domain/inventory/catalog/entities/variant.entity';
export declare class VariantOptionRequestValidator extends AbstractRequestValidator {
    type: string;
    value: string;
    constructor(option?: CatalogVariantEntity['options'][number]);
}
export declare class CreateVariantRequestValidator extends AbstractRequestValidator {
    product?: string;
    sku?: string;
    price?: number;
    minStockLevel?: number;
    options?: VariantOptionRequestValidator[];
    active?: boolean;
    gtin?: string;
    constructor(variant?: CatalogVariantEntity);
}
export declare class UpdateVariantRequestValidator extends CreateVariantRequestValidator {
}
