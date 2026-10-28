export declare class CatalogVariantOptionEntity {
    name: string;
    value: string;
    label?: string;
    externalNameId?: string;
    externalValueId?: string;
}
export declare const CatalogVariantOptionSchema: import("mongoose").Schema<CatalogVariantOptionEntity, import("mongoose").Model<CatalogVariantOptionEntity, any, any, any, import("mongoose").Document<unknown, any, CatalogVariantOptionEntity, any, {}> & CatalogVariantOptionEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CatalogVariantOptionEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<CatalogVariantOptionEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CatalogVariantOptionEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
