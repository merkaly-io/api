import { CatalogProductEntity } from 'src/domain/inventory/catalog/entities/product.entity';
import { CatalogVariantEntity } from 'src/domain/inventory/catalog/entities/variant.entity';
import { StockWarehouseEntity } from 'src/domain/inventory/stock/entities/warehouse.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class StockBalanceEntity extends AbstractEntity {
    warehouse: StockWarehouseEntity;
    variant: CatalogVariantEntity;
    readonly product: CatalogProductEntity;
    stock: number;
    reserved: number;
    incoming: number;
    readonly available: number;
    readonly expected: number;
    readonly projected: number;
}
