import { CatalogProductEntity } from '../../catalog/product/product.entity';
import { CatalogVariantEntity } from '../../catalog/variant/variant.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { StockBalanceEntity } from '../balance/balance.entity';
export declare class StockTransferItemEntity extends AbstractEntity {
    product: CatalogProductEntity;
    variant: CatalogVariantEntity;
    quantity: number;
    notes?: string;
    readonly balance: StockBalanceEntity;
    readonly isProcessable: boolean;
}
