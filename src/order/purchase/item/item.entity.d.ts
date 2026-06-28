import { CatalogProductEntity } from '../../../inventory/catalog/product/product.entity';
import { CatalogVariantEntity } from '../../../inventory/catalog/variant/variant.entity';
import { StockBalanceEntity } from '../../../inventory/stock/balance/balance.entity';
import { StockWarehouseEntity } from '../../../inventory/stock/warehouse/warehouse.entity';
import { AbstractEntity } from '../../../abstract.entity';
interface ItemPricing {
    product: number;
    readonly total: number;
    readonly unit: number;
    variant: number;
}
export type ItemAvailabilityMode = 'incoming' | 'reservation';
export interface ItemAvailability {
    mode: ItemAvailabilityMode;
    remaining: number;
    reserved: number | null;
    unreserved: number | null;
    allocatable: number | null;
    processable: boolean;
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
export {};
