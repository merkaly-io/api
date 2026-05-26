import { CatalogProductEntity } from 'src/domain/inventory/catalog/entities/product.entity';
import { CatalogVariantEntity } from 'src/domain/inventory/catalog/entities/variant.entity';
import { StockBalanceEntity } from 'src/domain/inventory/stock/entities/balance.entity';
import { StockWarehouseEntity } from 'src/domain/inventory/stock/entities/warehouse.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
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
    readonly isProcessable: boolean;
}
export {};
