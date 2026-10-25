import { AssetEntity } from '../../../assets/asset/asset.entity';
import { StockBalanceStatusEnum } from '../../stock/balance/balance.status.enum';
import { AbstractEntity } from '../../../abstract.entity';
import { MoneyEntity } from '../../../money.entity';
import { ProviderSkuReferenceEntity } from '../../../provider-reference.entity';
import { SupplierOfferEntity } from './supplier-offer.entity';
import { VariantIdentifierEntity } from './variant.identifier.entity';
import { VariantPolicyEntity } from './variant.policy.entity';
import type { CatalogAttributeEntity } from '../attribute/attribute.entity';
import type { CatalogProductEntity } from '../product/product.entity';
import type { StockBalanceEntity } from '../../stock/balance/balance.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    source?: ProviderSkuReferenceEntity;
    retailPrice?: MoneyEntity;
    supplierOffer?: SupplierOfferEntity;
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
    readonly status: StockBalanceStatusEnum;
    readonly balance: StockBalanceEntity;
    readonly balances: StockBalanceEntity[];
}
