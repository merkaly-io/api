import { AssetEntity } from 'src/domain/assets/entities/asset.entity';
import { StockBalanceStatusEnum } from 'src/domain/inventory/stock/enums/balance.status.enum';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { VariantIdentifierEntity } from './variant.identifier.entity';
import { VariantPolicyEntity } from './variant.policy.entity';
import type { CatalogAttributeEntity } from './attribute.entity';
import type { CatalogProductEntity } from './product.entity';
import type { StockBalanceEntity } from 'src/domain/inventory/stock/entities/balance.entity';
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
    readonly total: number;
    readonly stock: number;
    readonly status: StockBalanceStatusEnum;
    readonly balance: StockBalanceEntity;
    readonly balances: StockBalanceEntity[];
}
