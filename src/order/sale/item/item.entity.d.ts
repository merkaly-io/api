import { CatalogProductEntity } from '../../../inventory/catalog/product/product.entity';
import { CatalogVariantEntity } from '../../../inventory/catalog/variant/variant.entity';
import { AbstractEntity } from '../../../abstract.entity';
interface ItemPricing {
    product: number;
    readonly total: number;
    readonly unit: number;
    variant: number;
}
export declare class ItemEntity extends AbstractEntity {
    product?: CatalogProductEntity;
    variant: CatalogVariantEntity;
    quantity: number;
    notes: string;
    price: ItemPricing;
    readonly 'price.unit': number;
    readonly 'price.total': number;
}
export {};
