import { CatalogProductEntity } from '../../catalog/product/product.entity';
import { CatalogVariantEntity } from '../../catalog/variant/variant.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { StockBalanceEntity } from '../balance/balance.entity';
export interface StockTransferItemAvailability {
    mode: 'incoming' | 'reservation';
    remaining: number;
    allocatable: number | null;
    reserved: number | null;
    unreserved: number | null;
    processable: boolean;
}
export declare class StockTransferItemEntity extends AbstractEntity {
    product: CatalogProductEntity;
    variant: CatalogVariantEntity;
    quantity: number;
    reservedQuantity?: number;
    notes?: string;
    readonly balance: StockBalanceEntity;
    readonly availability: StockTransferItemAvailability;
    readonly isProcessable: boolean;
}
