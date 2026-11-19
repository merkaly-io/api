import { Schema as MongoSchema } from 'mongoose';
import { AssetEntity } from "../../../assets/asset/asset.entity";
import { AbstractEntity } from "../../../abstract.entity";
import { CatalogVariantOptionEntity } from './variant.option.entity';
import type { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogVariantPriceEntity {
    cost: number;
    retail: number;
}
export declare const CatalogVariantPriceSchema: MongoSchema<CatalogVariantPriceEntity, import("mongoose").Model<CatalogVariantPriceEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantPriceEntity, any, {}> & CatalogVariantPriceEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantPriceEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantPriceEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogVariantPriceEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogVariantShipsFromEntity {
    nameText: string;
    valueText: string;
    label?: string | null;
    nameId?: string | null;
    valueId?: string | null;
}
export declare const CatalogVariantShipsFromSchema: MongoSchema<CatalogVariantShipsFromEntity, import("mongoose").Model<CatalogVariantShipsFromEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantShipsFromEntity, any, {}> & CatalogVariantShipsFromEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantShipsFromEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantShipsFromEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogVariantShipsFromEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogVariantSourcingEntity {
    variantId?: string | null;
    shipsFrom?: CatalogVariantShipsFromEntity | null;
}
export declare const CatalogVariantSourcingSchema: MongoSchema<CatalogVariantSourcingEntity, import("mongoose").Model<CatalogVariantSourcingEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantSourcingEntity, any, {}> & CatalogVariantSourcingEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantSourcingEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantSourcingEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogVariantSourcingEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogVariantEntity extends AbstractEntity {
    product: CatalogProductEntity;
    price: CatalogVariantPriceEntity;
    active: boolean;
    picture?: AssetEntity;
    assets: AssetEntity[];
    options: CatalogVariantOptionEntity[];
    sourcing?: CatalogVariantSourcingEntity | null;
}
