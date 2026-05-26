import { CatalogProductEntity } from 'src/domain/inventory/catalog/entities/product.entity';
import { CatalogVariantEntity } from 'src/domain/inventory/catalog/entities/variant.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import type { StockBalanceEntity } from './balance.entity';
export declare class StockTransferItemEntity extends AbstractEntity {
    product: CatalogProductEntity;
    variant: CatalogVariantEntity;
    quantity: number;
    notes?: string;
    readonly balance: StockBalanceEntity;
    readonly isProcessable: boolean;
}
