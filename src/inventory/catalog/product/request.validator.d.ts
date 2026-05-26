import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogProductEntity } from 'src/domain/inventory/catalog/entities/product.entity';
type CatalogProductRequestSource = CatalogProductEntity & {
    minStockLevel?: number;
    policy?: {
        minStock?: number;
    };
};
export declare class ProductAttributeRequestValidator extends AbstractRequestValidator {
    type: string;
    values: string[];
    constructor(attribute?: CatalogProductEntity['attributes'][number]);
}
export declare class CreateProductRequestValidator extends AbstractRequestValidator {
    name: string;
    sku?: string;
    description?: string;
    sellPrice?: number;
    buyPrice?: number;
    minStockLevel?: number;
    measure: {
        amount: any;
        kind: any;
        unit: any;
    };
    pictures?: string[];
    category?: string;
    brand?: string;
    hashtags: string[];
    attributes: ProductAttributeRequestValidator[];
    constructor(product?: CatalogProductRequestSource);
}
export declare class UpdateProductRequestValidator extends CreateProductRequestValidator {
    name: string;
    measure: CreateProductRequestValidator['measure'];
}
export {};
