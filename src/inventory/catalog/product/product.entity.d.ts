import { AssetEntity } from 'src/domain/assets/entities/asset.entity';
import { StockBalanceEntity } from 'src/domain/inventory/stock/entities/balance.entity';
import { StockBalanceStatusEnum } from 'src/domain/inventory/stock/enums/balance.status.enum';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { CatalogAttributeEntity } from './attribute.entity';
import type { CatalogBrandEntity } from './brand.entity';
import type { CatalogCategoryEntity } from './category.entity';
import type { CatalogVariantEntity } from './variant.entity';
import type { ConfigurationMeasurementEntity } from 'src/domain/inventory/configuration/entities/measurement.entity';
import type { ConfigurationUnitEntity } from 'src/domain/inventory/configuration/entities/unit.entity';
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    price: number;
    sellPrice: number;
    cost: number;
    buyPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    attributes: {
        type: CatalogAttributeEntity;
        values: string[];
    }[];
    measure?: {
        amount: number;
        kind: ConfigurationMeasurementEntity;
        unit: string;
        selected?: ConfigurationUnitEntity;
    };
    hashtags: string[];
    readonly picture: AssetEntity;
    readonly pictures: AssetEntity[];
    readonly variants: CatalogVariantEntity[];
    readonly stock: number;
    readonly status: StockBalanceStatusEnum;
    readonly balance: StockBalanceEntity;
    readonly balances: StockBalanceEntity[];
    readonly 'measure.selected': ConfigurationUnitEntity;
}
