import { CatalogProductEntity } from '../../catalog/product/product.entity';
import { CatalogVariantEntity } from '../../catalog/variant/variant.entity';
import { StockWarehouseEntity } from '../warehouse/warehouse.entity';
import { AbstractEntity } from '../../../abstract.entity';
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
