import type { CatalogBrandEntity } from "../../inventory/catalog/brand/brand.entity";
import type { CatalogCategoryEntity } from "../../inventory/catalog/category/category.entity";
import type { CatalogProductEntity } from "../../inventory/catalog/product/product.entity";
import type { ContentPageEnum } from "./page.enum";
import type { ContentHomePage } from "./home.page.types";
export interface ContentPageValues {
    [ContentPageEnum.HOME]: ContentHomePage;
}
export type ContentPageKey = keyof ContentPageValues;
export type ContentStoreHomePage = ContentHomePage;
export interface ContentStorePageValues {
    [ContentPageEnum.HOME]: ContentStoreHomePage;
}
export type ContentStoreHomeProductsKey = 'newArrivals' | 'offers' | 'trending';
export interface ContentStoreHomePageMeta {
    brands?: CatalogBrandEntity[];
    collections?: CatalogCategoryEntity[];
    products: Record<ContentStoreHomeProductsKey, CatalogProductEntity[]>;
}
