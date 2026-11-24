import { Schema as MongoSchema, Types } from 'mongoose';
import { AssetEntity } from "../../../assets/asset/asset.entity";
import { CatalogProductSupplierStateEnum } from "./product.supplier.enum";
import { AbstractEntity } from "../../../abstract.entity";
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
import type { ContactVendorEntity } from "../../../contact/vendor/vendor.entity";
export declare class CatalogProductPropertyEntity {
    name: string;
    value: string;
    unit?: string | null;
}
export declare const CatalogProductPropertySchema: MongoSchema<CatalogProductPropertyEntity, import("mongoose").Model<CatalogProductPropertyEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogProductPropertyEntity, any, {}> & CatalogProductPropertyEntity & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogProductPropertyEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogProductPropertyEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogProductPropertyEntity> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogProductSupplierEntity {
    productId?: string | null;
    handlingDays?: number | null;
    rating?: number | null;
    ratingCount?: number | null;
    soldCount?: number | null;
    state?: CatalogProductSupplierStateEnum | null;
    checkedAt?: Date | null;
    syncedAt?: Date | null;
}
export declare const CatalogProductSupplierSchema: MongoSchema<CatalogProductSupplierEntity, import("mongoose").Model<CatalogProductSupplierEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogProductSupplierEntity, any, {}> & CatalogProductSupplierEntity & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogProductSupplierEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogProductSupplierEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogProductSupplierEntity> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    active: boolean;
    vendor?: ContactVendorEntity;
    supplier?: CatalogProductSupplierEntity | null;
    properties?: CatalogProductPropertyEntity[];
    defaultVariant: CatalogVariantEntity;
    readonly supplierPrice: number;
    readonly retailPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    posterId?: string | null;
    readonly picture: AssetEntity;
    readonly assets: AssetEntity[];
    readonly options: {
        name: string;
        values: string[];
    }[];
    readonly variants: CatalogVariantEntity[];
}
