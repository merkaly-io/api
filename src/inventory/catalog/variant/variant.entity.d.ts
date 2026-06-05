import { AssetEntity } from '../../../assets/asset/asset.entity';
import { StockBalanceStatusEnum } from '../../stock/balance/balance.status.enum';
import { AbstractEntity } from '../../../abstract.entity';
import { VariantIdentifierEntity } from './variant.identifier.entity';
import { VariantPolicyEntity } from './variant.policy.entity';
import type { CatalogAttributeEntity } from '../attribute/attribute.entity';
import type { CatalogProductEntity } from '../product/product.entity';
import type { StockBalanceEntity } from '../../stock/balance/balance.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    product?: CatalogProductEntity;
    price: number;
    policy: VariantPolicyEntity;
    identifier: VariantIdentifierEntity;
    options: {
        type: CatalogAttributeEntity;
        value: string;
    }[];
    active: boolean;
    pictures: AssetEntity[];
    readonly picture: AssetEntity;
    readonly total: number;
    readonly stock: number;
    readonly status: StockBalanceStatusEnum;
    readonly balance: StockBalanceEntity;
    readonly balances: StockBalanceEntity[];
}
