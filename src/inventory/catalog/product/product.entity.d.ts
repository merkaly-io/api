import { Schema as MongoSchema, Types } from 'mongoose';
import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
import type { ContactVendorEntity } from '../../../contact/vendor/vendor.entity';
import type { IntegrationSupplierEntity } from '../../../integration/supplier/supplier.entity';
export declare class CatalogProductPropertyEntity {
    name: string;
    value: string;
    unit?: string | null;
}
export declare const CatalogProductPropertySchema: MongoSchema<CatalogProductPropertyEntity, import("mongoose").Model<CatalogProductPropertyEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogProductPropertyEntity, any, {}> & CatalogProductPropertyEntity & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogProductPropertyEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogProductPropertyEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CatalogProductPropertyEntity> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    active: boolean;
    supplier?: IntegrationSupplierEntity;
    vendor?: ContactVendorEntity;
    externalProductId?: string;
    handlingDays?: number | null;
    properties?: CatalogProductPropertyEntity[];
    ratingValue?: number | null;
    ratingCount?: number | null;
    soldCount?: number | null;
    reviewCount?: number | null;
    variant: CatalogVariantEntity;
    readonly supplierPrice: number;
    readonly retailPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    hashtags: string[];
    readonly picture: AssetEntity;
    readonly assets: AssetEntity[];
    readonly options: {
        name: string;
        values: string[];
    }[];
    readonly variants: CatalogVariantEntity[];
}
