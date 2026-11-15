export declare class CatalogVariantOptionSourcingEntity {
    nameId?: string | null;
    valueId?: string | null;
}
export declare const CatalogVariantOptionSourcingSchema: import("mongoose").Schema<CatalogVariantOptionSourcingEntity, import("mongoose").Model<CatalogVariantOptionSourcingEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantOptionSourcingEntity, any, {}> & CatalogVariantOptionSourcingEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantOptionSourcingEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantOptionSourcingEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogVariantOptionSourcingEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CatalogVariantOptionEntity {
    name: string;
    value: string;
    label?: string;
    sourcing?: CatalogVariantOptionSourcingEntity | null;
}
export declare const CatalogVariantOptionSchema: import("mongoose").Schema<CatalogVariantOptionEntity, import("mongoose").Model<CatalogVariantOptionEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantOptionEntity, any, {}> & CatalogVariantOptionEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantOptionEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantOptionEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<CatalogVariantOptionEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
