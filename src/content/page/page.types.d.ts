import type { CatalogBrandEntity } from '../../inventory/catalog/brand/brand.entity';
import type { CatalogProductEntity } from '../../inventory/catalog/product/product.entity';
import type { ContentPageEnum } from './page.enum';
import type { ContentHomePage } from './home.page.types';
export interface ContentPageValues {
    [ContentPageEnum.HOME]: ContentHomePage;
}
export type ContentPageKey = keyof ContentPageValues;
type WithItems<B, I> = B & {
    items: I[];
};
export interface ContentStoreHomePage extends Omit<ContentHomePage, 'brands' | 'newArrivals' | 'offers' | 'trending'> {
    brands?: WithItems<ContentHomePage['brands'], CatalogBrandEntity>;
    newArrivals: WithItems<ContentHomePage['newArrivals'], CatalogProductEntity>;
    offers: WithItems<ContentHomePage['offers'], CatalogProductEntity>;
    trending: WithItems<ContentHomePage['trending'], CatalogProductEntity>;
}
export interface ContentStorePageValues {
    [ContentPageEnum.HOME]: ContentStoreHomePage;
}
export {};
