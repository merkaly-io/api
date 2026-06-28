import { CatalogProductEntity } from '../../../inventory/catalog/product/product.entity';
import { CatalogVariantEntity } from '../../../inventory/catalog/variant/variant.entity';
import { StockBalanceEntity } from '../../../inventory/stock/balance/balance.entity';
import { StockWarehouseEntity } from '../../../inventory/stock/warehouse/warehouse.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { ItemAvailability } from '../../../item.availability';
export type { ItemAvailability, ItemAvailabilityMode } from '../../../item.availability';
interface ItemPricing {
    product: number;
    readonly total: number;
    readonly unit: number;
    variant: number;
}
export declare class ItemEntity extends AbstractEntity {
    product?: CatalogProductEntity;
    variant: CatalogVariantEntity;
    warehouse: StockWarehouseEntity;
    quantity: number;
    notes: string;
    price: ItemPricing;
    readonly 'price.unit': number;
    readonly 'price.total': number;
    readonly balance?: StockBalanceEntity;
    readonly availability: ItemAvailability;
    readonly isProcessable: boolean;
}
