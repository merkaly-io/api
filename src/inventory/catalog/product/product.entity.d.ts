import { AssetEntity } from '../../../assets/asset/asset.entity';
import { StockBalanceEntity } from '../../stock/balance/balance.entity';
import { StockBalanceStatusEnum } from '../../stock/balance/balance.status.enum';
import { AbstractEntity } from '../../../abstract.entity';
import { CatalogAttributeEntity } from '../attribute/attribute.entity';
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
import type { ConfigurationMeasurementEntity } from '../../configuration/measurement/measurement.entity';
import type { ConfigurationUnitEntity } from '../../configuration/unit/unit.entity';
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
    readonly status: StockBalanceStatusEnum;
    readonly balance: StockBalanceEntity;
    readonly balances: StockBalanceEntity[];
    readonly 'measure.selected': ConfigurationUnitEntity;
}
